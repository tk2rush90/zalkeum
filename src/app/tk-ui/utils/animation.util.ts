export class Animator<T = number> {
  /**
   * calculate number value with progress
   * @param start start value
   * @param target target value
   * @param progress progress (0 to 1)
   */
  static calculateNumericProgress(start: number, target: number, progress: number): number {
    return start + ((target - start) * progress);
  }

  /**
   * return duration
   */
  get duration(): number {
    return this._options.duration;
  }

  /**
   * return delay
   */
  get delay(): number {
    return this._options.delay || 0;
  }

  /**
   * return start value
   */
  get start(): T {
    return this._options.start;
  }

  /**
   * return target value
   */
  get target(): T {
    return this._options.target;
  }

  /**
   * return repeat flag
   */
  get repeat(): boolean {
    return this._options.repeat || false;
  }

  /**
   * return alternate flag
   */
  get alternate(): boolean {
    return this._options.alternate || false;
  }

  /**
   * animation frame
   */
  private _frame = 0;

  /**
   * animation starting time
   */
  private _startingTime = 0;

  /**
   * animator start options
   */
  private _options!: AnimatorStartOptions<T>;

  /**
   * start animation
   * @param options animator start options
   */
  animate(options: AnimatorStartOptions<T>): void {
    this.cancel();

    this._options = options;
    this._startingTime = performance.now();

    if ((typeof this.start !== 'number' || typeof this.target !== 'number') && !this._options.calculator) {
      console.warn('Use `calculator` option for non-number start value and target value');
    }

    if (this.delay > 0) {
      this._frame = requestAnimationFrame(this._wait);
    } else {
      this._frame = requestAnimationFrame(this._draw);
    }
  }

  /**
   * wait for delay
   */
  private _wait = (): void => {
    const duration = performance.now() - this._startingTime;

    if (duration >= this.delay) {
      this.cancel();
      this._startingTime = performance.now();
      this._frame = requestAnimationFrame(this._draw);
    } else {
      this._frame = requestAnimationFrame(this._wait);
    }
  }

  /**
   * draw next frame
   */
  private _draw = (): void => {
    const passedTime = performance.now() - this._startingTime;
    const progress = this._getProgress(passedTime);
    const animatedValue = this._calculateAnimatedValue(progress, passedTime);

    this._callOnProgress(animatedValue as any);

    if (passedTime >= this.duration) {
      if (this.repeat) {
        if (this.alternate) {
          // reverse target and start
          const target = this.target;
          const start = this.start;

          this._options = {
            ...this._options,
            target: start,
            start: target,
          };
        } else {
          this._callOnProgress(this.start);
        }

        this.animate(this._options);
      } else {
        this.cancel();
        this._callOnEnd();
      }
    } else {
      this._frame = requestAnimationFrame(this._draw);
    }
  }

  /**
   * call on progress
   * @param value changed value
   */
  private _callOnProgress(value: T): void {
    if (this._options.onProgress) {
      this._options.onProgress(value);
    }
  }

  /**
   * call on end
   */
  private _callOnEnd(): void {
    if (this._options.onEnd) {
      this._options.onEnd();
    }
  }

  /**
   * get progress by timing
   * @param duration duration
   */
  private _getProgress(duration: number): number {
    const progress = duration / this.duration;

    if (this._options.timing) {
      return AnimatorTimingFunction[this._options.timing](progress);
    } else {
      return progress;
    }
  }

  /**
   * calculate animated value
   * @param progress progress (0 to 1)
   * @param passedTime passed time
   */
  private _calculateAnimatedValue(progress: number, passedTime: number): T | number {
    if (this._options.calculator) {
      return this._options.calculator(this.start, this.target, progress, passedTime);
    } else {
      let start = this.start as unknown as number || 0;
      let target = this.target as unknown as number || 0;

      if (passedTime >= this.duration) {
        return target;
      } else {
        return Animator.calculateNumericProgress(start, target, progress);
      }
    }
  }

  /**
   * cancel animation
   */
  cancel(): void {
    cancelAnimationFrame(this._frame);
  }
}

export interface AnimatorStartOptions<T> {
  // start value
  start: T;
  // target value
  target: T;
  // animation duration in milliseconds
  duration: number;
  // animation delay
  delay?: number;
  // animation timing function
  timing?: AnimatorTimingName;
  // repeat flag
  repeat?: boolean;
  // alternate flag
  // only works when `repeat` flag is `true`
  alternate?: boolean;
  // callback for animation progress
  onProgress?: (value: T) => void;
  /**
   * progress calculator to override default calculator
   * @param start start value
   * @param target target value
   * @param progress animation progress
   * @param passedTime passed time
   */
  calculator?: (start: T, target: T, progress: number, passedTime: number) => T;
  // callback for animation end
  onEnd?: () => void;
}

/**
 * animation timing function names
 */
export type AnimatorTimingName =
  'linear'
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce';

/**
 * easing formula comes from https://easings.net/
 */
export class AnimatorTimingFunction {
  static linear (x: number): number {
    return x;
  }

  static easeInSine (x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  static easeOutSine (x: number): number {
    return Math.sin((x * Math.PI) / 2);
  }

  static easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  static easeInQuad(x: number): number {
    return x * x;
  }

  static easeOutQuad(x: number): number {
    return 1 - (1 - x) * (1 - x);
  }

  static easeInOutQuad(x: number): number {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  }

  static easeInCubic(x: number): number {
    return x * x * x;
  }

  static easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }

  static easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  static easeInQuart(x: number): number {
    return x * x * x * x;
  }

  static easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }

  static easeInOutQuart(x: number): number {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  }

  static easeInQuint(x: number): number {
    return x * x * x * x * x;
  }

  static easeOutQuint(x: number): number {
    return 1 - Math.pow(1 - x, 5);
  }

  static easeInOutQuint(x: number): number {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }

  static easeInExpo(x: number): number {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  }

  static easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  static easeInOutExpo(x: number): number {
    return x === 0
      ? 0
      : x === 1
        ? 1
        : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
          : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }

  static easeInCirc(x: number): number {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }

  static easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  static easeInOutCirc(x: number): number {
    return x < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }

  static easeInBack(x: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return c3 * x * x * x - c1 * x * x;
  }

  static easeOutBack(x: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  }

  static easeInOutBack(x: number): number {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
      ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
      : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  }

  static easeInElastic(x: number): number {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
      ? 0
      : x === 1
        ? 1
        : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }

  static easeOutElastic(x: number): number {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
      ? 0
      : x === 1
        ? 1
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }

  static easeInOutElastic(x: number): number {
    const c5 = (2 * Math.PI) / 4.5;

    return x === 0
      ? 0
      : x === 1
        ? 1
        : x < 0.5
          ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
          : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
  }

  static easeInBounce(x: number): number {
    return 1 - this.easeOutBounce(1 - x);
  }

  static easeOutBounce(x: number): number {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  static easeInOutBounce(x: number): number {
    return x < 0.5
      ? (1 - this.easeOutBounce(1 - 2 * x)) / 2
      : (1 + this.easeOutBounce(2 * x - 1)) / 2;
  }
}
