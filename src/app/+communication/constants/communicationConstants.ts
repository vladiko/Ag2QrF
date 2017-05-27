export class CommunicationConstants {
    public static readonly API_HOST = 'http://qrnewapi.azurewebsites.net';
    // public static readonly LOGIN_URL = ' http://localhost:1337/user/login';
    public static readonly LOGIN_URL = CommunicationConstants.API_HOST + '/user/login';
    public static readonly USERS_URL = CommunicationConstants.API_HOST + '/user';
}
