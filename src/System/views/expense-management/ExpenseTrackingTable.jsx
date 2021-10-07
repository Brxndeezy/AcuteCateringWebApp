import React, { useState, useEffect } from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
    Card,
} from '@material-ui/core'
import { getAllExpense, deleteExpense } from './TableService'
import ExpenseEditorDialog from './ExpenseEditorDialog'
import { Breadcrumb, ConfirmationDialog } from 'app/components'
import shortid from 'shortid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& thead': {
            '& th:first-child': {
                paddingLeft: 16,
            },
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const CrudTable = () => {
    const [uid, setUid] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const [expense, setExpense] = useState(null)
    const [expenseList, setExpenseList] = useState([])
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false)
    const [
        shouldOpenConfirmationDialog,
        setShouldOpenConfirmationDialog,
    ] = useState(false)

    const classes = useStyles()

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false)
        setShouldOpenConfirmationDialog(false)
        updatePageData()
    }

    const handleDeleteExpense = (expense) => {
        setExpense(expense)
        setShouldOpenConfirmationDialog(true)
    }

    const handleConfirmationResponse = () => {
        deleteExpense(expense).then(() => {
            handleDialogClose()
        })
    }

    const updatePageData = () => {
        getAllExpense().then(({ data }) => {
            setExpenseList(data)
        })
    }

    useEffect(() => {
        updatePageData()
    }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: 'Expense Tracking Table' }]} />
            </div>

            <Button
                className="mb-4"
                variant="contained"
                color="primary"
                onClick={() => setShouldOpenEditorDialog(true)}
            >
                Add New Expense
            </Button>
            <Card className="w-full overflow-auto" elevation={6}>
                <Table
                    className={clsx(
                        'whitespace-pre min-w-750',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Expense Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenseList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((expense, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {expense.expensename}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        R{expense.amount}
                                    </TableCell>
                                    <TableCell className="px-0">
                                        {expense.date}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {expense.Status}
                                    </TableCell>
                                    
                                    <TableCell className="px-0 border-none">
                                        <IconButton
                                            onClick={() => {
                                                setUid(expense.id)
                                                setShouldOpenEditorDialog(true)
                                            }}
                                        >
                                            <Icon color="primary">edit</Icon>
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleDeleteExpense(expense)
                                            }
                                        >
                                            <Icon color="error">delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

                <TablePagination
                    className="px-4"
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={expenseList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={({ target: { value } }) =>
                        setRowsPerPage(value)
                    }
                />

                {shouldOpenEditorDialog && (
                    <ExpenseEditorDialog
                        handleClose={handleDialogClose}
                        open={shouldOpenEditorDialog}
                        uid={uid}
                    />
                )}
                {shouldOpenConfirmationDialog && (
                    <ConfirmationDialog
                        open={shouldOpenConfirmationDialog}
                        onConfirmDialogClose={handleDialogClose}
                        onYesClick={handleConfirmationResponse}
                        text="Are you sure to delete?"
                    />
                )}
            </Card>
        </div>
    )
}

export default CrudTable
