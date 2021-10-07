import React, { useState, useEffect } from 'react'
import {
    Dialog,
    Button,
    Grid,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { getTaskById, updateTask, addNewTask } from './TableService'
import { generateRandomId } from 'utils'

const ProjectEditorDialog = ({ uid, open, handleClose }) => {
    const [state, setState] = useState({
        taskname: '',
        department: '',
        startdate: '',
        enddate: '',
        projectowner: '',
        status: '',
        

    })

    

    const handleChange = (event, source) => {
        event.persist()
        if (source === 'switch') {
            setState({
                ...state,
                isActive: event.target.checked,
            })
            return
        }

        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = () => {
        let { id } = state
        if (id) {
            updateTask({
                ...state,
            }).then(() => {
                handleClose()
            })
        } else {
            addNewTask({
                id: generateRandomId(),
                ...state,
            }).then(() => {
                handleClose()
            })
        }
    }

    useEffect(() => {
        getTaskById(uid).then((data) => setState({ ...data.data }))
    }, [uid])

   //let {startdate, enddate} = state 

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="p-6">
                <h4 className="mb-5">Update Task</h4>
                <ValidatorForm onSubmit={handleFormSubmit}>
                 <Grid container>
                    <Grid className="mb-4" container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <TextValidator
                                className="w-full mb-4"
                                label="Task Name"
                                onChange={handleChange}
                                type="text"
                                name="taskname"
                                value={state?.taskname}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="w-full mb-4"
                                label="Department"
                                onChange={handleChange}
                                type="text"
                                name="department"
                                value={state?.department}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextValidator
                                className="w-full mb-4"
                                label="Project Owner"
                                onChange={handleChange}
                                type="text"
                                name="projectowner"
                                value={state?.projectowner}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <Grid item sm={12} xs={12}>

                             <TextValidator     
                                className="w-full mb-4"
                                label="Start Date"
                                onChange={handleChange}
                                type="text"
                                name="startdate"
                                value={state?.startdate}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                           <TextValidator
                                className="w-full mb-4"
                                label="End Date"
                                onChange={handleChange}
                                type="text"
                                name="enddate"
                                value={state?.enddate}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            
                            <TextValidator
                                className="w-full mb-4"
                                label="Status"
                                onChange={handleChange}
                                type="text"
                                name="status"
                                value={state?.status}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                           
                         </Grid>
                        </Grid>
                    </Grid>

                    </Grid>

                    <div className="flex justify-between items-center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                         Save
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleClose()}
                        >
                            Cancel
                        </Button>
                    </div>
                </ValidatorForm>
            </div>
        </Dialog>
    )
}

export default ProjectEditorDialog
