/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  clp: any,
  onClpApiLoaded: any
}
