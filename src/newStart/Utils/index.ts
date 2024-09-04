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
  public static Build(): number {
    const instance = Id.getInstance();
    instance.identifier += 1;
    return instance.identifier;
  }
}
