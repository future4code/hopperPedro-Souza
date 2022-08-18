enum ROLE {
    USER = "user",
    ADMIN = "admin"
}

function exercicio5(
    vetor: any[]
): string[]{
    const admin = vetor.filter((item) => {
        return item.role === ROLE.ADMIN
    })
    const emailAdmin = admin.map(element => {
        return element.email
    })
    return emailAdmin
}

const entrada: any[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

console.log(exercicio5(entrada))