export interface Tripulante {
    idTripulante: string;
    nombre: string;
    direccion: Direccion;
    cursos: string;
    calificaciones: Calificacion[]
}

interface Direccion {
    calle: string;
    numero: string;
    complemento: string;
}

interface Calificacion {
    tipoNota: string;
    nota: number;
    comentario: string;
}