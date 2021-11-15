export class RandomUtil {
  /**
   * create random key
   */
  static key(): string {
    return Math.random().toString(32).split('.')[1];
  }

  /**
   * create random date
   * @param start start date
   * @param end end date
   */
  static date(start?: Date, end?: Date): Date {
    start = start || new Date(1990, 1, 1);
    end = end || new Date();

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  /**
   * pick random item from items array
   * @param items items array
   */
  static pick<T>(items: T[]): T {
    return items[this.number(0, items.length)];
  }

  /**
   * pick random number between min and max
   * @param min min number
   * @param max max number
   */
  static number(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
