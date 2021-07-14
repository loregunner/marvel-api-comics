import React, { useEffect } from 'react';

import axios from 'axios';

import './index.scss';

import swal from 'sweetalert';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Body from './body';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    maxHeight: 950,
    minHeight: 200,
    marginBottom: 15,
  },
  media: {
    width: 200,
    height: 240,
    margin: 'auto',
  },
  format: {
    margin: 'auto',
  },
});

function BodyComics() {
  const classes = useStyles();

  const [data, setData] = React.useState(null);
  const [dataFavorita, setDataFavorita] = React.useState('');
  const [dataMore, setDataMore] = React.useState(false);
  const [mostrar, setMostrar] = React.useState(false);

  async function marvelComics() {
    try {
      const respuesta = await axios({
        url: 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bfe419bcf44af4bba1c6a5f7c0f178d4&hash=0883de3ee0f51f26324051abd7429dd6',
        method: 'GET',
      });
      return respuesta;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function load() {
      const respuesta = await marvelComics();
      const dataComic = await respuesta.data.data.results;
      setData(dataComic);
      return respuesta;
    }

    load();
  }, []);
  const stories = () => {
    setDataMore(!dataMore);
  };
  console.log(dataFavorita);
  return (
    <div>
      <div className='buttonsElegir'>
        <Button
          size='small'
          color='primary'
          className='button'
          onClick={() => setMostrar(false)}>
          Todos
        </Button>
        <Button
          size='small'
          color='primary'
          className='button'
          onClick={() => setMostrar(true)}>
          Favoritos
        </Button>
      </div>
      {mostrar !== true ? (
        <div className='data'>
          {data !== null
            ? data.map((item) => {
                return (
                  <Card className={classes.root} key={item.id}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.thumbnail.path + '/portrait_xlarge.jpg'}
                        title='Contemplative Reptile'
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {item.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'>
                          {item.description}
                        </Typography>
                        <br></br>
                        {dataMore === true ? <h3>Stories</h3> : null}
                        {dataMore === true
                          ? item.stories.items.map((itemList) => {
                              return (
                                <Typography
                                  variant='subtitle1'
                                  color='secondary'
                                  component='p'>
                                  {itemList.name}
                                </Typography>
                              );
                            })
                          : null}
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button onClick={() => {
                        swal("SE GUARDO EN FAVORITOS");
                        setDataFavorita([...dataFavorita,  item])
                      } 
                           }>
                        Favorite
                      </Button>
                      <Button onClick={stories}>Learn More</Button>
                    </CardActions>
                  </Card>
                );
              })
            : <div><h1 className='cargando'>Cargando</h1> <Body></Body></div>}
        </div>
      ) : (
        <div className='data'>
        {dataFavorita !== '' 
          ? dataFavorita.map((item,index) => {
              return (
                <Card className={classes.root} key={index}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.thumbnail.path + '/portrait_xlarge.jpg'}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {item.description}
                      </Typography>
                      <br></br>
                      {dataMore === true ? <h3>Stories</h3> : null}
                      {dataMore === true
                        ? item.stories.items.map((itemList) => {
                            return (
                              <Typography
                                variant='subtitle1'
                                color='secondary'
                                component='p'>
                                {itemList.name}
                              </Typography>
                            );
                          })
                        : null}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => {swal("SE ELIMINO EN FAVORITOS");
                  const updatedItems = dataFavorita.filter((el, index) => { return dataFavorita[index].id  !== item.id});
                  setDataFavorita(updatedItems)
                  }}>
                    Remove from favorites
                    </Button>
                    <Button onClick={stories}>Learn More</Button>
                  </CardActions>
                </Card>
              );
            })
          : <div><h1 className='ingresaFavoritos'>INGRESA TUS FAVORITOS</h1><Body></Body></div>}
      </div>
      )}
    </div>
  );
}

export default BodyComics;
