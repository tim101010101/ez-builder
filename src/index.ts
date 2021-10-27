import initProject from './handle_md';

initProject()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });
