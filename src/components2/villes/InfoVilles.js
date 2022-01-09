//import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Grid  from "../../services/components/Grid";
import GridItem from '../../services/components/GridItem';
import { makeStyles } from "@material-ui/core/styles";
import styles from  "../../services/components/CompletedStyle";
import Layout from './Layout';
import { getSite } from "../../services/components/lib/apiLayout";
import InfoArea from "../../services/components/InfoArea";

// Typographie
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

// @material-ui/icons
import BeachAccess from "@material-ui/icons/BeachAccess";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";


//image
const parme ="https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fheader.jpg?alt=media&token=a0d68410-fc64-4f23-a712-41a2fe422129";


const useStyles = makeStyles(styles);


const Services = ({ site }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Layout site={site}>
        <div className={classes.container} style={{ minHeight: "50vh" }}>
          <div className={classes.section}>
            <Grid justify="center">
              <GridItem xs={12} sm={12} md={8}>
              <Typography variant="h2" gutterBottom>
                PARMA
              </Typography>
              <img style={{ display: 'none' }} src={parme} alt="increase priority" />
              <Typography variant="subtitle1" gutterBottom>
          
              Parme (Parma en italien, Pärma ['pɛʁma] en dialecte parmesan) 
              est une ville italienne de la province de Parme, dans la région d'Émilie-Romagne. 
              Sa devise est : « Que les ennemis tremblent car la Vierge protège Parme ».
              Située entre la chaîne des Apennins et la plaine du Pô, 
              la ville est divisée en deux par la rivière Parma, affluent du Pô.
              La ville de Parme doit sa notoriété à un ensemble d'éléments hétéroclites :
              éléments culturels : c’est la ville d'origine du chef d’orchestre Arturo Toscanini 
              et du peintre Parmigianino ; le compositeur Giuseppe Verdi a grandi à Busseto dans 
              la province de Parme et occupe encore aujourd'hui une place importante dans 
              la vie musicale parmesane ;
              éléments sociologiques : le club de football Parme 
              AC a remporté en quelques années un palmarès important ;
              éléments économiques de la province de Parme : les produits agricoles et leurs transformations 
              agrolimentaires tels que le parmigiano reggiano ou le prosciutto di Parma ont forgé une image 
              de produits authentiques
              </Typography>
              <br/>
              <br/>
              <Typography variant="h2" gutterBottom>
                FIRENZE
              </Typography>
              <Typography variant="subtitle1">
                Florence possède un patrimoine artistique exceptionnel, 
                témoignage glorieux de son passé séculaire.{'\n'} 
                Cimabue et Giotto, les pères de la peinture italienne, 
                vécurent ici, tout comme Arnolfo et Andrea Pisano, qui réformèrent 
                l'architecture et la sculpture; Brunelleschi, Donatello et Masaccio, 
                fondateurs de la Renaissance; Ghiberti et les Della Robbia; 
                Filippo Lippi et Fra Angelico; Botticelli et Paolo Uccello; 
                les génies universels Léonard de Vinci et Michelange.{'\n'} 
                Leurs travaux, comme ceux de générations d'artistes s'étant succédés 
                jusqu'à notre siècle, sont contenus dans les musées de la ville.{'\n'}
                {'\n\n'}
                A Florence, grâce à Dante, nacquit la langue italienne; 
                des études littéraires de Petrarque et de Boccace y furent rédigées; 
                les idéaux humanistes furent remis au goût du jour ainsi 
                que la philosophie et les valeurs de l'ère classique; 
                avec Machiavel nacquit la Science politique moderne; avec Guicciardini, 
                la prose historique; et avec Galilée, la science expérimentale moderne.{'\n'} 
                Depuis l'époque de Charlemagne, Florence est une cité universitaire. {'\n'}
                Elle accueille aujourd'hui de nombreux instituts spécialisés et 
                est un centre culturel intenational. {'\n'}
                Les Accadémies, les écoles d'art, 
                les instituts scientifiques et les centres culturels contribuent à l'intense activité de la ville.
              </Typography>
              <br/>
              <br/>
              <Typography variant="h2" gutterBottom>
                  SIENA
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Sienne est souvent considérée comme l'une des villes les plus vivables 
                de la Toscane et à juste titre.{'\n'} 
                C'est un peu plus calme que les autres 
                capitales italiennes, mais il y a encore beaucoup de choses à faire 
                et une belle vie étudiante. Vous aurez de nouveaux amis en un rien 
                de temps avec lequel vous pourrez explorer cette ville.{'\n'} 
                Sienne a également tendance à être un peu plus facile sur la poche, 
                ce qui est toujours une caractéristique attrayante pour étudier.{'\n'} 
                Découvrez leur université ci-dessous et les écoles de cuisine 
                que vous pouvez prendre à part, ou bien sûr, 
                si vous ne visitez Sienne que pour une courte période.

              </Typography>
              <br/>
              <br/> 
              
              <Typography variant="h2" gutterBottom>
                ROMA
              </Typography>
              <Typography variant="subtitle1" gutterBottom> 
                Il y a de nombreuses destinations ou étudier l'italien en Italie, 
                mais étudier à Rome est l'option la plus spectaculaire. Le Colisée, 
                le Panthéon et le Forum Romanum font partie des monuments historiques 
                les plus connus du monde, et les fresques de la Chapelle Sixtine sont sans pareil. 
                Mais étudier à Rome, ce n'est pas seulement faire du tourisme. 
                Vous pourrez faire l'expérience de la vie culturelle active de la ville, 
                découvrir ses petits restaurants dissimulés dans les ruelles, 
                choisir votre gelateria favorite, et vous promener dans les quartiers 
                oubliés de tous à l'exception des touristes les plus ardents. 
                Le fait d'avoir un point de départ, des capacités en italien, 
                et des camarades de classe avec qui explorer Rome fera toute la différence.
              </Typography>
              </GridItem>
            </Grid>{" "}
          </div>
            <Grid>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Smart"
                description=""
                icon={BeachAccess}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Prémium"
                description=""
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Basic"
                description=""
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </Grid>
        </div>
      </Layout>
    </React.Fragment>
  );
}
export default Services;

export async function getStaticProps() {
  const site = await getSite();

  return {
    props: {
      site
    }
  };
}
