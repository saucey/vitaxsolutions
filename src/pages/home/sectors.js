import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../layouts/navbar'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CreateIcon from '@material-ui/icons/Create';
import SectorForm from '../../components/sectorForm'
import { CLOSE_MODAL, DELETE_SECTOR, GET_SECTORS } from '../../store/actions'
import { AppModal } from '../../components/modal'


const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: '20px'
  },
}));

const AddSectorBtn = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);
  
  const Sectors = () => {
    
    const dispatch = useDispatch()
    
    const getSectors = () => {
      dispatch(GET_SECTORS());
    }
    
    const deleteSector = (sectorId) => {
      dispatch(DELETE_SECTOR(sectorId))
    }
    
    const modalOpen = (close) => {
      dispatch(CLOSE_MODAL(close))
    }
    
    const listSectors = useSelector((state) => state.listSectors);
    const [sector, setSector] = useState(null);
    const classes = useStyles();
    
    const handleOpen = (sector) => {
      setSector(sector)
      modalOpen(true);
    };
    
    useEffect(() => {
      getSectors();
    }, [])
    
    const columns = [
      { field: 'idsectors', headerName: 'Sector ID', width: 100 },
      { field: 'sector', headerName: 'Sector', width: 100 },
      { field: 'short', headerName: 'Short', width: 100 },
      {
        field: 'user',
        headerName: 'User',
        width: 100,
      },
      {
        field: 'active_from',
        headerName: 'Active From',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
      },
      {
        field: 'action_edit',
        headerName: 'Edit',
        sortable: false,
        renderCell: (params) => (
          <Button
          variant="contained"
          onClick={() => handleOpen(params.data)}
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          
          >
          <CreateIcon />
          </Button>
          ),
        },
        {
          field: 'action_delete',
          headerName: 'Delete',
          sortable: false,
          renderCell: (params) => (
            <Button
            variant="contained"
            onClick={() => deleteSector(params.data.idsectors)}
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            >
            <DeleteForeverOutlinedIcon />
            </Button>
            ),
          },
        ];
        
        return (
          <div style={{ height: 400, width: '100%' }}>
          <AddSectorBtn onClick={() => handleOpen(null)} variant="contained" color="primary" className={classes.margin}>
          <AddBoxIcon style={{ color: '#fff' }}/>
          </AddSectorBtn>

            <AppModal>
              <SectorForm sector={sector}/>
            </AppModal>
          
          <DataGrid rows={listSectors} columns={columns} pageSize={10} checkboxSelection />
          </div>
          )
        }
        
        export default Layout(Sectors)
        
        