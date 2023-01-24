export function Members() {
    let titulo = 'Integrantes De La Banda';

    let Integrantes = [
        {
            id: 0,
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/2.jpg?alt=media&token=a29fd0d5-2291-47aa-b15d-00cbe0ec942b",
            nombre:"Stuart Harold",
            history:"Stuart Harold Pot (2-D) (Crawley, Reino Unido, 23 de mayo de 1978) es un personaje ficticio británico y vocalista principal de la banda virtual, Gorillaz. Fue creado por Damon Albarn y Jamie Hewlett. De carácter amable pero muy torpe, inocente y distraído",

        },
        {
            id: 1,
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/4.jpg?alt=media&token=3babc034-cb61-4130-84eb-62a6c51d8021",
            nombre:"Noodle",
            history:"Noodle (31 de octubre de 1990) es un personaje femenino ficticio y guitarrista de la banda virtual actualmente tiene 32 años Gorillaz. Fue creada por Jamie Hewlett y Damon Albarn. Llegó a la banda siendo una niña muy pequeña sin recordar nada de su pasado, y obtuvo el puesto por ser una excelente guitarrista."
        },
        {
            id: 2,
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/1.jpg?alt=media&token=38f11062-eb9f-4f8a-91ed-d0bb3a7ef26a",
            nombre:"Murdoc Niccals",
            history:"Murdoc Niccals, nacido el 6 de Junio de 1966 (56 años), en Stoke-on-Trent, Inglaterra, es un personaje ficticio, bajista de la banda virtual Gorillaz. Fue creado por Jamie Hewlett y Damon Albarn. De carácter sádico, agresivo y malvado."
        },
        {
            id: 3,
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/ruseel.jpg?alt=media&token=b6d86d74-8f43-4697-9f25-a0812815c92d",
            nombre:"Russel Hobbs",
            history:"Russel Hobbs (Nueva York, 3 de junio de 1975) es un músico ficticio estadounidense y miembro de la banda virtual Gorillaz. Expresado por Remi Kabaka Jr. Fue creado por Damon Albarn y Jamie Hewlett."
        }

    ];

    


    return(
        <h1 className="text-center py-3">{titulo}</h1>
        
    )
}