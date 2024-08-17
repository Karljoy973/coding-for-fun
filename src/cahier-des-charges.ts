/**!SECTION
 * cahier des charges :
 *  - Objectif du projet :
 * Coder pour la première fois un calendrier accessible à travers une interface web.
 *  - Durée du projet :
 *   14 jours,maximum
 *  - temps imparti :
 *  je travaillerai pendant 1 à 3h par jour
 *  - technologies utilisées :
 *      - languages : html, css, javascript(typescript)
 *      - serveur de développement / serving-tools: nodejs, webpack
 *  - ressources utilisées :
 * documentations MDN et w3c school et fullcourse css
 *  - fonctionnalités :
 *      - voir le nombre de jours de chaque mois, selectionner un jour via un click de souris, créer un évènement pour le jour en question, voir le jour actuel,
 *      - revenir dans le passé (au plus pendant un an pour l'instant), planifier des évènements sur un an et naviguer de mois en mois. voir la liste des évènements
 *
 */

/**!SECTION
 *  # planification des fonctionnalités :
 *      - naviguer de mois en mois :
 * j'imagine un bandeau avec le mois courant, une flèche à droite et une flèche à gauche indiquant respectivement le mois précédent et le mois suivant
 *
 *                  ------------------------------------------------------------------------------------------------------------
 *                  |  |                                                                                                    |  |
 *                  |< |                                            Mars                                                    | >|
 *                  |__|____________________________________________________________________________________________________|__|
 *                  |  |         |                |             |            |              |               |                   |
 *                  | 1 |  L      |        M       |       M     |      J     |    V         |     S         |     D            |
 *                  |  |         |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *                  |  |       1 |               2|            3|            |              |               |                   |
 *                  |  |         |                |             |            |              |               |                   |
 *                  | 2|         |                |             |            |              |               |                  |
 *                  |  |         |                |             |            |              |               |                   |
 *                  |  |         |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *                  |           |                |             |            10|           11 |           12  |                   |
 *                  |   |        |                |             |            |              |               |                   |
 *                  |   |        |                |             |     X     |              |               |                   |
 *                  | 3 |        |                |             |           |              |               |                   |
 *                  |           |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *                                     |           |                |             |            |              |               |
 *                  |           |                |             |            |              |               |                   |
 *                  |  |         |                |             |            |              |               |                   |
 *                  | 4|        |                |             |            |              |               |                   |
 *                  |           |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *                   |           |                |             |            |           25 |            26|               27  |
 *                  |   |       |                |             |            |              |               |                   |
 *                  |5 |       |                |             |            |              |                |                   |
 *                  |  |        |                |             |            |              |               |                   |
 *                  |           |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *                  |           |                |             |            |              |               |                   |
 *                  |   |        |                |             |            |              |               |                   |
 *                  | 6|        |                |             |            |              |               |                   |
 *                  |  |         |                |             |            |              |               |                   |
 *                  |           |                |             |            |              |               |                   |
 *                   ------------------------------------------------------------------------------------------------------------
 *
 * jour actuel : x
 *
 * à droite :
 * une liste des évènements :
 * avec une tuile par évènement contenant le titre de l'évènement et sa description, l'utilisateur peut cliquer dessus pour l'étendre.
 *
 *
 * tout sera en front-end, il n'y aura pas de back-end, pas de sauvegarde de donénes.
 *
 * à l'ouverture d'un jour :
 *                               _________________________________________________________________________________
 *                              |                                Mardi  X                                        |
 *                              |________________________________________________________________________________|
 *                              |      __________________________________________________________________     ^  |
 *                              |     ||     |      |            |                                      |     |  |
 *                              |     ||  7h |      |   Titre    |                                      |     |  |
 *                              |     ||_____|------|            |--------------------------------------|     |  |
 *                              |     ||     |      |            |                                      |     |  |
 *                              |     ||  8h |      -------------                                       |     |  |
 *                              |     ||_____-----------------------------------------------------------|     |  |
 *                              |     ||     |                     ____________                         |     |  |
 *                              |     ||  9h |                     |          |                         |     |  |
 *                              |     ||_____----------------------| Titre    |-------------------------|     |  |
 *                              |     ||     |                     |          |                         |     ||<------------ scrollbar
 *                              |     || 10h |                     |          |                         |     |  |
 *                              |     ||_____----------------------____________-------------------------|     |  |
 *                              |     ||     |                                                          |     |  |
 *                              |     || 11h |                                                          |     |  |
 *                              |       __________________________________________________________________    v  |
 *                              |                                      ____                                      |
 *                              |      <------------------------------|___|------------------------------->      |
 *                              ----------------------------------------------------------------------------------
 * 
 * le popUp a : un header, des dimensions, un div central sur lequell on peut scroller, ce div contient une liste d'horaires par tranches d'1h, il y a une délimitation au 
 * milieu de chaque horaire pour visualiser les demi-heures, il y a aussi la possibilité de placer des 'évènements', chaque évènement est représenté par un rectangle de 
 * hauteur la durée de l'évènement et de largeur '1 colonne' on peut mettre plusieurs évènements sur le meme horaire, ils seront juxtaposés et on peut scroller horizontalement
 * pour voir tous les évènements disponibles pour un horaire donné. Les horaires ont un ordre de priorité colonne 1 > colonne 2 > ... > colonne n
 * on peut modifier l'ordre d'importance des évènements en intervertissant les évènements ensembles (click n drag) ou juste en appuyant sur le boutton 'intervertir' (voir icone)
 * qui intervertit deux évènements juxtaposés  
 *
 *width = 75% de la  largeur du calendrier 
 *height = 75% de la hauteur du calendrier  
 * je peux me passer d'une iframe (j'utilise la propriété scroll du div et je suis ok
 *
 * ################### Priorités ####################################
//je dois rajouter un div dans lequel il y a le nom des jours de la semaine
// je dois afficher seulement la première lettre de chaque jour dans l'element du jour
// je dois créer un div pour chaque semaine et par la suite populer les semaines
// je dois rajouter un élément de ui (comme un petit carré avec le nombre d'évenements liés à un jour en particulier)
//sur le hover je vais juste mettre à jour le style de la bordure au lieu de changer la couleur de l'élément
//regarder un full course css 
retirer tous les ids de css 
faire un css reset 
 *
 *#######  Plus tard : utiliser ma config firebase pour host le site sans utiliser de code angular ##### 
 * je vais host en mode Webprojects.qjklfq.com/WebCalendar 
 *
 *
 *
 *
 */
