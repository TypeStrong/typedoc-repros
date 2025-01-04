/** @interface */
export type Something = {
    /**
     * Some function
     * 
     * @overload Default
     * {@label DEFAULT}
     */
    someFunction(): void;
    /**
     * @overload With number
     * {@label WITHNUMBER}
     */
    someFunction(num: number): void;
}