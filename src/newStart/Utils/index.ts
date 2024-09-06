export class Id {
  private static instance: Id;
  private identifier: number = 0;

  // Le constructeur est privé pour empêcher l'instanciation directe
  private constructor() {}

  // Méthode statique pour obtenir l'instance unique
  public static getInstance(): Id {
    if (!Id.instance) {
      Id.instance = new Id();
    }
    return Id.instance;
  }

  // Méthode statique pour construire/générer un nouvel ID
  public static Build(): string {
    const instance = Id.getInstance();
    instance.identifier += 1;
    return `node-${instance.identifier}`;
  }
}

/**
 * 
 * J'aurais bien aimé déscopper ça  en utilisant certaines clés, peut etre en spécifiant des clés à utiliser dans `tree`
Stringify = (tree: NodeModel): void => {
  this.s += `NodeId: ${tree.IDELEMENT} - ParentId: ${
    tree.Parent?.IDELEMENT ?? "root"
  } - NodeType: ${tree.NodeType} - RootParent: ${tree.RootFootprint} \n`;
  if (!!tree.Children) {
    tree.Children.forEach((child) => {
      this.Stringify(child);
    });
  }
}; * 
 * 
 */
