// This works: 
// import { IBase } from '../../base/src';

// This does not work: 
import { IBase } from '@mytest/base';


/**
 * Interface that extends {@link IBase}
 */
export interface ISub extends IBase {
    bar(): void;
}

/**
 * Class that implements {@link IBase}
 */
export class Sub implements IBase {
    foo(): void {
        //
    }
}