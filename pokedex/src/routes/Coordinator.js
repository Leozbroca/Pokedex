export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/Pokedex")
}

export const goToDetalhes = (navigate, id) => {
    navigate(`/Detalhes/${id}`)
}