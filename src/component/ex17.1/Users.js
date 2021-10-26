import React from "react";
import axios from "axios";



export const Users = () => {
    const [hobbies, setHobbies] = React.useState(null);
    const [job, setJob] = React.useState('');
    const [isUpdate, setIsUpdate] = React.useState(false)
    const [newJob, setNewJob] = React.useState('');
    const [updateId, setUpdateId] = React.useState(-1)

    React.useEffect(() => {
        axios.get('https://61752c6108834f0017c70b32.mockapi.io/api/hobbies/')
            .then((res) => {
                setHobbies(res.data)
            })
    }, [])

    //get = url
    //post - url + data(body+raw + json)
    //delete - url + id = url/id
    //put - url + body data

    const jobHandler = (e) => {
        setJob(e.target.value);
    }

    const addJobHandler = async () => {
        let data = {
            job: job,
        }
        const res = await axios.post('https://61752c6108834f0017c70b32.mockapi.io/api/hobbies/', data)
        console.log("post :", res)
        let newData = res.data
        const hobbiesList = [...hobbies];
        hobbiesList.push(newData)
        setHobbies(hobbiesList)
        setJob('');
    }

    const deleteHandler = async (id) => {
        const deleteRes = await axios.delete('https://61752c6108834f0017c70b32.mockapi.io/api/hobbies/' + id)
        if (deleteRes.status === 200) {
            const hobbiesList = [...hobbies];
            let resultOfNonDeleted = hobbiesList.filter((hob) => {
                return hob.id !== id
            })
            setHobbies(resultOfNonDeleted)

        }
    }

    const updateHandler = (id) => {
        setIsUpdate(!isUpdate);
        let h = hobbies.find(value => {
            return value.id === id
        })
        setUpdateId(h.id);
        setNewJob(h.job)
    }

    const handlerUpdateHobbie = (e) => {
        setNewJob(e.target.value)
    }

    const updateNewHobbiesHandler = async () => {
        let response = await axios.put('https://61752c6108834f0017c70b32.mockapi.io/api/hobbies/'+updateId,{
            job : newJob
        })
        if(response.status === 200){
            const hobbiesList = [...hobbies];
            let h = hobbies.find(value => {
                return value.id === updateId
            })
            h.job = newJob;

            setHobbies(hobbiesList)
        }
        console.log("response :",response)
    }

    return <div>
        <input type={'text'} value={job} name={"job"} onChange={jobHandler}/>
        <input type={'button'} value={'Add Job'} onClick={addJobHandler}/>
        {
            hobbies ? hobbies.map((h) => {
                return <div key={h.id}>{h.id} ->{h.job}
                    <input type={'button'} value={'delete'} onClick={() => {
                        deleteHandler(h.id)
                    }}/>
                    <input type={'button'} value={'update'} onClick={() => {
                        updateHandler(h.id)
                    }}/>
                </div>

            }) : "loading"
        }
        {
            isUpdate ?
                <>
                    new value :<input value={newJob} type={'text'} onChange={handlerUpdateHobbie}/>
                    <input type={'button'} value={'cancel'} onClick={updateHandler}/>
                    <input type={'button'} value={'updateNew'} onClick={updateNewHobbiesHandler}/>
                </>

                : ""
        }

    </div>

}