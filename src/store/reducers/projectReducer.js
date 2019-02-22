
const initialState = {
    projects: [
        {id: 1, title: 'React Redux Ninja', content: 'After taking this bootcamp you will become a master ninja'},
        {id: 2, title: 'FireBase Advanced', content: 'This is a fire base advanced course for ninjas'},
        {id: 3, title: 'BlockChain Development', content: 'Highest software developers in the world'},
        {id: 4, title: 'Piggery Investment', content: 'Piggery Investment is taking the world by storm all the way'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state

}

export default projectReducer