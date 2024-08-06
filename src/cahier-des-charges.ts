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
 *
 */
