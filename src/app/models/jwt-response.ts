export interface JwtResponse {
    dataUser:{
        email: string,
        accessToken: string,
        expiresIn: string
    }
}
