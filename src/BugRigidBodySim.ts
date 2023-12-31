import { BugAbstractSubject } from './BugAbstractSubject.js';

/** The second class in hierarchy.

Adds method {@link getRigidBodySim} aka {@link BugRigidBodySim.getRigidBodySim}

Inherits method {@link getAbstractSubject}
*/
export class BugRigidBodySim extends BugAbstractSubject {

/**
*/
constructor() {
  super();
};

/** returns the string 'RigidBodySim' */
getRigidBodySim(): string {
  return 'RigidBodySim';
};

} // end BugRigidBodySim class
