const INITIAL_STATE = {
    sections: [
        {
          title: 'harness',
          imageUrl: 'https://www.iksurfmag.com/wp-content/uploads/2015/09/IMG_0178.jpg',
          id: 1,
          linkUrl: 'shop/harness'
        },
        {
          title: 'kites',
          imageUrl: 'https://i.ytimg.com/vi/o_pzCLYRzgU/maxresdefault.jpg',
          id: 2,
          linkUrl: 'shop/kites'
        },
        {
          title: 'control_bars',
          imageUrl: 'https://th.bing.com/th/id/R.21d71b071719c195cb38d24f69f6a5b7?rik=XZishO4eViLxIg&pid=ImgRaw',
          id: 3,
          linkUrl: 'shop/control_bars'
        },
        {
          title: 'boards',
          imageUrl: 'https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/best-kitesurfing-boards.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/boards'
        },
        {
          title: 'hydrofoil',
          imageUrl: 'https://www.iksurfmag.com/wp-content/uploads/2016/11/unspecified-2.jpeg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/hydrofoil'
        }]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;