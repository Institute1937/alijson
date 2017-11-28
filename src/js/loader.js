export class Loader {
  constructor() {
  }

  load (urlToLoad) {
    console.log(urlToLoad)
    return new Promise((resolve, reject) => {
      fetch(urlToLoad, {
        method: 'get'
      }).then(function(response) {
        resolve(response);
        console.log('loaded!');
      }).catch(function(err) {
        console.log('error :)');
        reject(err);
      });
    });

  }

}
