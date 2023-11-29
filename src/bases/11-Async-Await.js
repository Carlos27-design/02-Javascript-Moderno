//const getImagePromesa = () =>
//new Promesa((resolve, reject) => resolve('https://asdasdasdas.com'));

//getImagePromesa().then(console.log);

const getImage = async () => {
  try {
    const apiKey = 'xStR6Xr3vIoLLlPuALILNPQQeP9INQoM';

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const data = resp.json();
    data.then(({ data }) => {
      const { url } = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);
    });
  } catch (err) {}
};
getImage();
