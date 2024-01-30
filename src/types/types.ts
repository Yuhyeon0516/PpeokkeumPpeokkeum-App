export type MainStackParams = {
    Tabs: undefined;
    Zone: undefined;
};

export type HomeStackParams = {
    Auth: AuthStackParams | undefined;
    Main: MainStackParams | undefined;
};

export type AuthStackParams = {
    AuthMain: undefined;
    Login: undefined;
    RegisterStack: RegisterStackParams | undefined;
};

export type RegisterStackParams = {
    RegisterOne: undefined;
    RegisterTwo:
        | {
              uid: string;
          }
        | undefined;
};
