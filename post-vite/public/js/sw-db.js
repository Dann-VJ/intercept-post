﻿const db = PouchDB('notas');

function guardarNota(nota) {
    nota._id = new Date().toISOString();
    return db.put(nota).then(()=> {
        self.registration.sync.register('nuevo-post');
        const newResp = {ok:true,offline:true};
        return new Response(JSON.stringify(newResp));
    });
}

function postearNotas() {
    const posteos = [];
    return db.allDocs({include_docs:true}).then(docs => {
        docs.rows.forEach(row => {
            const doc = row.doc;
            const data = {
                title: doc.title,
                text: doc.text,
            }

            const fetchProm = fetch('http://localhost:3001/api/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(resp => {
                console.log('resp ', resp.json())
                return db.remove(doc);
            });
            posteos.push(fetchProm);
        })
        return Promise.all(posteos);
    });
}