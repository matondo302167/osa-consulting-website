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
                Information générale
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Étant les pionniers en Italie dans le domaine de l'accompagnement 
                dans les Universités, OSA Consulting vous offre des services qui sont 
                à la hauteur de vos attentes en terme rapport qualité/prix.
                Nous collaborons avec les Universités de Rome, Florence, Bologne et Parme.
                Prière de prendre connaissance des packs ci-dessous.
                Au cas où vous auriez des doutes ou incompréhensions, vous pouvez nous contacter 
                et nous aurons le plaisir de clarifier ces zones d'ombres. 
              </Typography>
              <br/>
              <br/>
              <Typography variant="h2" gutterBottom>
                Pack Basic
              </Typography>
              <Typography variant="subtitle1">
              1. Entretien pour un accompagnement au choix de la faculté;
              {'\n\n'}
              2.	Accompagnement aux pré-inscriptions et problématiques 
                  liées à l'Université (Licence et Master);
              {'\n\n'}
              3.	Accompagnement à la demande de bourse;
                  {'\n'}
                  NB: Nous tenons à vous informer que le dépôt de tout dossier,  
                  même complet, ne garantit en rien l'obtention de la bourse d'étude. 
                  L'éventuelle acceptation ou refus est du ressort de l'Agence des bourses et 
                  stages car elle est l'entité compétente en la matière.

              4.	Assistance à la regularisation de la documentation en Italie (à l'arrivée).
                  NB: Les frais de paiement  du titre de séjour, 
                  assurance et autres sont à la charge de l'étudiant et/ou des parents. 
                  nous occupons seulement du suivi.

              • Coût total du service
                (à payer avant le départ du Gabon et non remboursable)
                150.OOO Fcfa (€228,68)
              </Typography>
              <br/>
              <br/>
              <Typography variant="h2" gutterBottom>
                 Pack Smart
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                1. Entretien pour un accompagnement au choix de la faculté;
                2.	Accompagnement aux pré-inscriptions et problématiques 
                    liées à l'Université (licences et Master);
                3.	Accompagnement à la demande de bourse;
                    NB: Nous tenons à vous informer que le dépôt de tout dossier,  
                    même complet, ne garanti en rien l'obtention de la bourse d'études. 
                    L'éventuelle acceptation ou refus est du ressort de l'Agence des bourses et 
                    stages emcar elle est l'entité compétente en la matière.
                4.	Assistance à la regularisation de la documentation en Italie (à l'arrivée).
                    NB: Les frais de paiement  du titre de séjour, 
                    assurance et autre sont à la charge de l'étudiant et/ou ses parents. 
                    On se charge juste d'un accompagnement direct.

                5.	Accompagnement à la préparation des tests d'entrée;
       
                6.  Aide à la recherche au logement;
                  
                7.	Réception à l'arrivée (aéroport);
                  
                • Coût total du service
                  
                  (à payer avant le départ du Gabon et non remboursable)
                  250.OOO Fcfa (€381,13€);

              </Typography>
              <br/>
              <br/> 
              
              <Typography variant="h2" gutterBottom>
                Prémium
              </Typography>
              <Typography variant="subtitle1" gutterBottom> 
              1. Entretien pour un accompagnement au choix de la faculté;
   
              2.	Accompagnement aux pré-inscriptions et problématiques 
                  liées à l'Université (licences et Master);
   
              3.	Accompagnement à la demande de bourse;
        
                  NB: Nous tenons à vous informer que le dépôt de tout dossier,  
                  même complet, ne garanti en rien l'obtention de la bourse d'études. 
                  L'éventuelle acceptation ou refus est du ressort de l'Agence des bourses et 
                  stages emcar elle est l'entité compétente en la matière.

              4.	Assistance à la regularisation de la documentation en Italie (à l'arrivée).

                  NB: Les frais de paiement  du titre de séjour, 
                  assurance et autre sont à la charge de l'étudiant et/ou ses parents. 
                  On se charge juste d'un accompagnement direct.

              5.	Accompagnement à la préparation des tests d'entrée;
                
              6.  Aide à la recherche au logement;
                          
              7.	Réception à l'arrivée (aéroport);
                
              8.  Abonnement de transport publique (pour 1 mois);
                
              9.  Visite au centre historique.
                
                • Coût total du service
              
                (à payer avant le départ du Gabon et non remboursable)
                300.OOO Fcfa (€457,35);
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
