export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidDay extends CustomError{
    constructor(){
        super(400, "Data inválida")
    }
}

export class InvalidPreco extends CustomError{
    constructor(){
        super(400, "Preço Inválido")
    }
}

export class InvalidDuracao extends CustomError{
    constructor(){
        super(400, "Duração Inválida")
    }
}

export class InvalidLatitude extends CustomError{
    constructor(){
        super(400, "Latitude Inválida")
    }
}

export class InvalidLongitude extends CustomError{
    constructor(){
        super(400, "Longitude Inválida")
    }
}

export class InvalidPets extends CustomError{
    constructor(){
        super(400, "Número de pets inválido")
    }
}

export class InvalidInicio extends CustomError{
    constructor(){
        super(400, "Horário de início inválido")
    }
}

export class InvalidFim extends CustomError{
    constructor(){
        super(400, "Horário de início inválido")
    }
}