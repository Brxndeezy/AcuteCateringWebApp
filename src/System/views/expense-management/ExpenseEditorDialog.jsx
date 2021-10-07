import React, { useState, useEffect } from 'react'
import {
    Dialog,
    Button,
    Grid,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { getExpenseById, updateExpense, addNewExpense } from './TableService'
import { generateRandomId } from 'utils'
import *as TableService from './TableService';

const ExpenseEditorDialog = ({ uid, open, handleClose }) => {
    const [state, setState] = useState({
        expensename: '',
        amount: '',
        date: '',
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
            updateExpense({
                ...state,
            }).then(() => {
                handleClose()
            })
        } else {
            addNewExpense({
                id: generateRandomId(),
                ...state,
            }).then(() => {
                handleClose()
            })
        }
    }

    useEffect(() => {
        getExpenseById(uid).then((data) => setState({ ...data.data }))
    }, [uid])

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="p-6">
                <h4 className="mb-5">Update Expense</h4>
                <ValidatorForm onSubmit={handleFormSubmit}>
                   <Grid container>
                    <Grid className="mb-4" container spacing={4}>
                        <Grid item sm={12} xs={12}>
                            <TextValidator
                                className="w-full mb-4"
                                label="Expense Name"
                                onChange={handleChange}
                                type="text"
                                name="expensename"
                                value={state?.expensename}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="w-full mb-4"
                                label="Amount"
                                onChange={handleChange}
                                type="text"
                                name="amount"
                                value={state?.amount}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextValidator
                                className="w-full mb-4"
                                label="Date"
                                onChange={handleChange}
                                type="text"
                                name="date"
                                value={state?.date}
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
                    </Grid>
                </ValidatorForm>
            </div>
        </Dialog>
    )
}

export default ExpenseEditorDialog

export const getStatusCollection = () => ([
    {id: '1', title: 'Approved'},
    {id: '2', title: 'To Submit'},
    {id: '3', title: 'Refused'},
    {id: '4', title: 'Processing'}
])

