import {useState , useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === ''){
            setAlert('Please enter something','error')
        }
        else {
            searchUsers(text)

            setText('')
        }
    }
    
    const handleClick = () => clearUsers()

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
         {/*Search Form */}
        
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative pl-5">
                        <input type="text" placeholder='Search' className="w-full bg-gray-200 input input-lg text-black"
                        value={text}
                        onChange={handleChange}
                        />
                        <button type = "submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>

                    </div>
                </div>
            </form>
        </div>

        {/*Clear Button */}
        {users.length > 0 && (<div className='pl-5'>
        <button onClick={handleClick} className="btn btn-ghost btn-lg">
            Clear
        </button>
        </div>
        )}
    
    </div>
  )
}

export default UserSearch
