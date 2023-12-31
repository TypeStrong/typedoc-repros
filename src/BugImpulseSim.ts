import { BugRigidBodySim } from './BugRigidBodySim.js';

/** The third class in hierarchy.

Adds method {@link getImpulseSim} aka {@link BugImpulseSim.getImpulseSim}.

Inherits method {@link getRigidBodySim} aka {@link BugRigidBodySim.getRigidBodySim}

Inherits method {@link getAbstractSubject}

this causes error with typedoc:  \@link BugContactSim.getImpulseSim
*/
export class BugImpulseSim extends BugRigidBodySim {
/**
*/
constructor() {
  super();
};

/** returns the string 'ImpulseSim' */
getImpulseSim(): string {
  return 'ImpulseSim';
};

} // end class

