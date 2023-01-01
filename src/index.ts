export class Camera {
  /**
   * Check or request permissions to access the camera.
   * This uses both `requestCameraPermissionsAsync` and `getCameraPermissionsAsync` to interact with the permissions.
   *
   * @example
   * ```ts
   * const [status, requestPermission] = Camera.useCameraPermissions();
   * ```
   */
  static useCameraPermissions = createPermissionHook({
    requestMethod: async () => {
      throw 1;
    },
    getMethod: async () => {
      throw 1;
    },
  });
}

/**
 * Create a new permission hook with the permission methods built-in.
 * This can be used to quickly create specific permission hooks in every module.
 */
export function createPermissionHook<
  Permission extends PermissionResponse,
  Options extends object
>(methods: PermissionHookMethods<Permission, Options>) {
  return (options?: PermissionHookOptions<Options>) =>
    usePermission<Permission, Options>(methods, options);
}

interface PermissionHookMethods<
  Permission extends PermissionResponse,
  Options = never
> {
  /** The permission method that requests the user to grant permission. */
  requestMethod: (options?: Options) => Promise<Permission>;
  /** The permission method that only fetches the current permission status. */
  getMethod: (options?: Options) => Promise<Permission>;
}

interface PermissionHookBehavior {
  /** If the hook should automatically fetch the current permission status, without asking the user. */
  get?: boolean;
  /** If the hook should automatically request the user to grant permission. */
  request?: boolean;
}

export type PermissionHookOptions<Options extends object> =
  PermissionHookBehavior & Options;

/**
 * Get or request permission for protected functionality within the app.
 * It uses separate permission requesters to interact with a single permission.
 * By default, the hook will only retrieve the permission status.
 */
declare function usePermission<
  Permission extends PermissionResponse,
  Options extends object
>(
  methods: PermissionHookMethods<Permission, Options>,
  options?: PermissionHookOptions<Options>
): [
  Permission | null,
  RequestPermissionMethod<Permission>,
  GetPermissionMethod<Permission>
];

// These types are identical, but improves the readability for suggestions in editors
type RequestPermissionMethod<Permission extends PermissionResponse> =
  () => Promise<Permission>;
type GetPermissionMethod<Permission extends PermissionResponse> =
  () => Promise<Permission>;

/**
 * An object obtained by permissions get and request functions.
 */
export interface PermissionResponse {
  /**
   * Determines the status of the permission.
   */
  status: PermissionStatus;
  /**
   * Determines time when the permission expires.
   */
  expires: PermissionExpiration;
  /**
   * A convenience boolean that indicates if the permission is granted.
   */
  granted: boolean;
  /**
   * Indicates if user can be asked again for specific permission.
   * If not, one should be directed to the Settings app
   * in order to enable/disable the permission.
   */
  canAskAgain: boolean;
}

/**
 * Permission expiration time. Currently, all permissions are granted permanently.
 */
export type PermissionExpiration = "never" | number;
