import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'


// function tisk() {
//     const element = (
//         <div>
//             <h1>Hello world!!!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// };
// setInterval(tisk, 1000);
// function Welcame(props) {
//     return <h1>Hello, {props.name}</h1>;
//
// }
// function App(){
//     return(
//         <div>
//             <Welcame name='Ihor'/>
//             <Welcame name='Serhii'/>
//             <Welcame name='Ivan'/>
//         </div>
//     );
// }
// ReactDOM.render(<App/>, document.getElementById('root'));
// function Comment(props) {
//     return (
//         <div className='Comment'>
//             <div className='UserInfo'>
//                 <img className='Avatar'
//                      src={props.author.avatarUrl}
//                      alt={props.author.name}
//                 />
//             </div>
//             <div className='UserInfo-name'>
//                 {props.author.name}
//             </div>
//             <div className='Comment-text'>
//                 {props.text}
//             </div>
//             <div className='Comment-date'>
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
/////////
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!  I will travel this place',
//     author: {
//         name: 'Hello Ihor',
//         avatarUrl: 'https://s3.nat-geo.ru/images/2019/9/25/5d8e6eb0eb2f4b08b8da01eb3a96ca6b.max-2000x1000.jpg'
//     },
//     bla: 'bla1'
// };
// function formatDate(date) {
//     return date.toLocaleTimeString();
// }
//
// function Avatar(props) {
//     return (
//         <img
//             className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">{props.user.name}</div>
//         </div>
//     );
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author}/>
//             <div className="Comment-text">{props.text}</div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );
///////////////////////////////// Lec3
// const {Fragment} = React;
// const POST1_SELECTED = Symbol();
// const POST2_SELECTED = Symbol();
// const NOTHING_SELECTED = Symbol();
// //////dani
// let loaded = false;
//
// const post1 = {
//     authorName: 'Ihor Bereziak',
//     data: '19.07.1991',
//     imgAuthor: 'https://avatanplus.com/files/resources/mid/58529020345191590282fdd6.png',
//     text: 'I study React!!!!!!!!!!!!!!!!!!!',
//     imgPost: null
// };
//
// const post2 = {
//     authorName: 'Serhii Pavliuk',
//     data: '29.05.1988',
//     imgAuthor: 'https://s.ill.in.ua/i/news/630x373/413/413308.jpg',
//     text: 'I study JS!!!!!!!!!!!!!!!!!!!',
//     imgPost: 'https://s.ill.in.ua/i/news/630x373/413/413308.jpg'
// };
//
// let post1IsClosed = false;
// let post2IsClosed = false;
// let post1IsActive = false;
// let post2IsActive = false;
// let selectedPost = NOTHING_SELECTED;
// /////  UI
// const PostImg = props => {
//     const {src} = props;
//     return src && <img src={src} className='img1' alt='Crish'/>;
// };
//
// const Post = props => {
//     const {post, isClosed, isActive, IsSelected, onCloseRequest, toggleIsActive, selectedPost} = props;
//     return isClosed || (
//         <div className="main" style={{backgroundColor: IsSelected ? 'rgb(180, 200, 200' : 'white'}}
//              onClick={(e) => {
//                  console.log('Clicked on post');
//                  e.stopPropagation();
//                  selectedPost();
//              }}>
//             <div className="block">
//                 <img src={post.imgAuthor} className='img' alt={post.authorName}/>
//                 <h1>{post.authorName}</h1>
//                 <p className="text">is with</p>
//                 <h2>{post.authorName}</h2>
//                 <small>{post.data}</small>
//             </div>
//             <div className="block1">
//                 <p>{post.text}</p>
//                 <PostImg src={post.imgPost}/>
//             </div>
//             <div>
//                 Is active: <span style={{
//                 color: isActive ? 'green' : 'red',
//                 border: isActive ? '1px solid green' : '1px solid red'
//             }}>{isActive ? 'yes' : 'no'}</span> {' '}
//                 <button onClick={(e) => {
//                     e.stopPropagation();
//                     toggleIsActive()
//                 }}>{isActive ? 'Deactivate' : 'Activate'}</button>
//             </div>
//             <div>
//                 <button onClick={onCloseRequest}>Close!</button>
//             </div>
//
//         </div>
//     );
// };
//
// const App = props => {
//     const {
//         loaded,
//         post1,
//         post2,
//         post1IsClosed,
//         post2IsClosed,
//         post1IsActive,
//         post2IsActive,
//         selectedPost,
//         closePost1,
//         closePost2,
//         toggleActiveForPost1,
//         toggleActiveForPost2,
//         selectPost1,
//         selectPost2,
//         deselectPost
//     } = props.data;
//     const post1IsSelected = selectedPost === POST1_SELECTED;
//     const post2IsSelected = selectedPost === POST2_SELECTED;
//     return <div className='main-app-wrapper' onClick={() => {
//         console.log('Clicked on backround');
//         deselectPost();
//     }}>
//         {loaded ? (
//             <Fragment>
//                 <Post
//                     post={post1}
//                     isClosed={post1IsClosed}
//                     isActive={post1IsActive}
//                     onCloseRequest={closePost1}
//                     toggleIsActive={toggleActiveForPost1}
//                     IsSelected={post1IsSelected}
//                     selectedPost={selectPost1}
//                 />
//                 <Post
//                     post={post2}
//                     isClosed={post2IsClosed}
//                     isActive={post2IsActive}
//                     onCloseRequest={closePost2}
//                     toggleIsActive={toggleActiveForPost2}
//                     IsSelected={post2IsSelected}
//                     selectedPost={selectPost2}
//                 />
//             </Fragment>
//         ) : (
//             <div>Please wait, loading...</div>
//         )}</div>;
// };
//
// function renderUI() {
//     ReactDOM.render(
//         <App data={{
//             loaded,
//             post1,
//             post2,
//             post1IsClosed,
//             post2IsClosed,
//             post1IsActive,
//             post2IsActive,
//             selectedPost,
//             closePost1,
//             closePost2,
//             toggleActiveForPost1,
//             toggleActiveForPost2,
//             selectPost1,
//             selectPost2,
//             deselectPost
//         }}/>,
//         document.getElementById('root')
//     );
// };
//
// ///// Lohika kodu
//
// const closePost1 = () => {
//     post1IsClosed = true;
//     renderUI();
// };
//
// const closePost2 = () => {
//     post2IsClosed = true;
//     renderUI();
// };
//
// const toggleActiveForPost1 = () => {
//     post1IsActive = post1IsActive ? false : true;
//     renderUI();
// };
//
// const toggleActiveForPost2 = () => {
//     post2IsActive = !post2IsActive;
//     renderUI();
// };
//
// const selectPost1 = () => {
//     selectedPost = POST1_SELECTED;
//     renderUI();
// };
//
// const selectPost2 = () => {
//     selectedPost = POST2_SELECTED;
//     renderUI();
// };
//
// const deselectPost = () => {
//     selectedPost = NOTHING_SELECTED;
//     renderUI();
// };
//
// const setLoaded = () => {
//     loaded = true;
//     renderUI();
// };
// renderUI();
// setTimeout(setLoaded, 1000);

/////////////  LEC 4
// const {Fragment} = React;
// const POST1_SELECTED = Symbol();
// const POST2_SELECTED = Symbol();
// const NOTHING_SELECTED = Symbol();
// //////dani
// let loaded = false;
//
// const post1 = {
//     authorName: 'Ihor Bereziak',
//     data: '19.07.1991',
//     imgAuthor: 'https://avatanplus.com/files/resources/mid/58529020345191590282fdd6.png',
//     text: 'I study React!!!!!!!!!!!!!!!!!!!',
//     imgPost: null
// };
//
// const post2 = {
//     authorName: 'Serhii Pavliuk',
//     data: '29.05.1988',
//     imgAuthor: 'https://s.ill.in.ua/i/news/630x373/413/413308.jpg',
//     text: 'I study JS!!!!!!!!!!!!!!!!!!!',
//     imgPost: 'https://s.ill.in.ua/i/news/630x373/413/413308.jpg'
// };
//
// class Counter extends Component {
//     state = {count: 1};
//     increase() {
//         this.setState((state) => ({count: state.count + 1}));
//         // this.setState({count: 100})
//     }
//
//     render() {
//         return (
//             <div>
//                 Count is: {this.state.count}{' '}
//                 <button
//                     onClick={() => {
//                         this.increase()
//                     }}
//                 >
//                     Increase
//                 </button>
//             </div>
//         )
//     }
// }
//
//
// let post1IsClosed = false;
// let post2IsClosed = false;
// let post1IsActive = false;
// let post2IsActive = false;
// let selectedPost = NOTHING_SELECTED;
// /////  UI
// const PostImg = props => {
//     const {src} = props;
//     return src && <img src={src} className='img1' alt='Crish'/>;
// };
//
// const Post = props => {
//     const {post, isClosed, isActive, onCloseRequest, toggleIsActive, selectedPost} = props;
//     return isClosed || (
//         <div className="main">
//             <div className="block">
//                 <img src={post.imgAuthor} className='img' alt={post.authorName}/>
//                 <h1>{post.authorName}</h1>
//                 <p className="text">is with</p>
//                 <h2>{post.authorName}</h2>
//                 <small>{post.data}</small>
//             </div>
//             <Counter/>
//             <div className="block1">
//                 <p>{post.text}</p>
//                 <PostImg src={post.imgPost}/>
//             </div>
//             <div>
//                 Is active: <span style={{
//                 color: isActive ? 'green' : 'red',
//                 border: isActive ? '1px solid green' : '1px solid red'
//             }}>{isActive ? 'yes' : 'no'}</span> {' '}
//                 <button onClick={(e) => {
//                     e.stopPropagation();
//                     toggleIsActive()
//                 }}>{isActive ? 'Deactivate' : 'Activate'}</button>
//             </div>
//             <div>
//                 <button onClick={onCloseRequest}>Close!</button>
//             </div>
//
//         </div>
//     );
// };
//
// const App = props => {
//     const {
//         loaded,
//         post1,
//         post2,
//         post1IsClosed,
//         post2IsClosed,
//         post1IsActive,
//         post2IsActive,
//         selectedPost,
//         closePost1,
//         closePost2,
//         toggleActiveForPost1,
//         toggleActiveForPost2,
//         selectPost1,
//         selectPost2,
//         deselectPost
//     } = props.data;
//     const post1IsSelected = selectedPost === POST1_SELECTED;
//     const post2IsSelected = selectedPost === POST2_SELECTED;
//     return <div>
//         {loaded ? (
//             <Fragment>
//                 <Post
//                     post={post1}
//                     isClosed={post1IsClosed}
//                     isActive={post1IsActive}
//                     onCloseRequest={closePost1}
//                     toggleIsActive={toggleActiveForPost1}
//                     IsSelected={post1IsSelected}
//                     selectedPost={selectPost1}
//                 />
//                 <Post
//                     post={post2}
//                     isClosed={post2IsClosed}
//                     isActive={post2IsActive}
//                     onCloseRequest={closePost2}
//                     toggleIsActive={toggleActiveForPost2}
//                     IsSelected={post2IsSelected}
//                     selectedPost={selectPost2}
//                 />
//             </Fragment>
//         ) : (
//             <div>Please wait, loading...</div>
//         )}</div>;
// };
//
// function renderUI() {
//     ReactDOM.render(
//         <App data={{
//             loaded,
//             post1,
//             post2,
//             post1IsClosed,
//             post2IsClosed,
//             post1IsActive,
//             post2IsActive,
//             selectedPost,
//             closePost1,
//             closePost2,
//             toggleActiveForPost1,
//             toggleActiveForPost2
//         }}/>,
//         document.getElementById('root')
//     );
// };
//
// ///// Lohika kodu
//
// const closePost1 = () => {
//     post1IsClosed = true;
//     renderUI();
// };
//
// const closePost2 = () => {
//     post2IsClosed = true;
//     renderUI();
// };
//
// const toggleActiveForPost1 = () => {
//     post1IsActive = post1IsActive ? false : true;
//     renderUI();
// };
//
// const toggleActiveForPost2 = () => {
//     post2IsActive = !post2IsActive;
//     renderUI();
// };
//
// const selectPost1 = () => {
//     selectedPost = POST1_SELECTED;
//     renderUI();
// };
//
// const selectPost2 = () => {
//     selectedPost = POST2_SELECTED;
//     renderUI();
// };
//
// const deselectPost = () => {
//     selectedPost = NOTHING_SELECTED;
//     renderUI();
// };
//
// const setLoaded = () => {
//     loaded = true;
//     renderUI();
// };
// renderUI();
// setTimeout(setLoaded, 1000);
const {Fragment} = React;
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [
                {title: 'Ihor', date: '01.02.1995', text: 'ggggggggggggg', id: 1},
                {title: 'Vita', date: '20.12.1990', text: 'ggggggggggggg', id: 2},
                {title: 'Ivan', date: '15.10.1988', text: 'ggggggggggggg', id: 3},
                {title: 'Petro', date: '20.07.1991', text: 'ggggggggggggg', id: 4}
            ]
        }
    }

    createTitleList = () => {
        return this.state.post.map(user => (
            <div>
                <div>{user.title}</div>
                <button onClick={this.showPost}>Open post</button>
            </div>
        ));
    };
    showPost = (id) => {
       console.log(1);
    };

        render(){
            return (
                <Fragment>
                    <div>{this.createTitleList()}</div>

                </Fragment>
            );
        }
    }

    ReactDOM.render(<Posts/>, document.getElementById('root'));