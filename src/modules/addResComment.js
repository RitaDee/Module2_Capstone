const addComment = (dataid, name, text) => {
  const add = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/comments',
      {
        method: 'post',
        body: JSON.stringify({
          item_id: dataid,
          username: name,
          comment: text,
        }),
        headers: { 'content-type': 'application/json' },
      });
    const data = await res.text();
    return data;
  };
  add();
};

const addReserve = (dataid, name, sDate, eDate) => {
  const addreserve = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/reservations',
      {
        method: 'post',
        body: JSON.stringify({

          item_id: dataid,
          username: name,
          date_start: sDate,
          date_end: eDate,

        }),
        headers: { 'content-type': 'application/json' },
      });

    const data = res.text();
    return data;
  };
  addreserve();
};

export { addReserve, addComment };