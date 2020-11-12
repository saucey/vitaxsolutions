import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'

const SectorForm = (sect) => {

  console.log(sect, 'sect')
  
  const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
  const userLoggedIn = useSelector((state) => state.userLoggedIn);
  
  const [sector, setSector] = useState(sect.sector !== null ? sect.sector.sector : '')
  const [short, setShort] = useState(sect.sector !== null ? sect.sector.short : '')
  const [idsectors, setIdsectors] = useState(sect.sector !== null ? sect.sector.idsectors : '')
  const [emailAddress, setEmailAddress] = useState(userLoggedIn && userLoggedIn.username !== undefined ? userLoggedIn.username : '')
  
  const [errorMessaging, setErrorMessaging] = useState(null)
  
  const dispatch = useDispatch();
  
  const createSector = (sector) => {
    dispatch({
      type: 'CREATE_SECTOR',
      sector: sector
    })
  }
  
  const updateSector = (sector) => {
    dispatch({
      type: 'UPDATE_SECTOR',
      sector: sector
    })
  }
  
  const onSubmit = data => {  
    (sect.sector !== null) ? updateSector(data) : createSector(data);
  }
  
  
  
  return (
    <form
    // ref={useRef()  }
    onSubmit={handleSubmit(onSubmit)}
    >
    <TextField
    value={sector}
    onChange={(e) => setSector(e.target.value)}
    variant="outlined"
    margin="normal"
    fullWidth
    id="sector"
    label="Sector"
    name="sector"
    fullWidth={true}
    autoComplete="sector"
    autoFocus
    inputRef={register({ required: true })}
    error={errors.sector?.type === 'required'}
    />
    {errors.sector?.type === 'required' && <span>This field is required</span>}
    <TextField
    value={short}
    onChange={(e) => setShort(e.target.value)}
    variant="outlined"
    margin="normal"
    fullWidth
        name="short"
        fullWidth={true}
    label="Short"
    type="short"
    id="short"
    autoComplete="short"
    inputRef={register({ required: true })}
    error={errors.short?.type === 'required'}
    />
    <TextField
    value={idsectors}
    inputRef={register}
    variant="standard"
    margin="normal"
    name="idsectors"
    type="hidden"
    id="idsectors"
    />
    <TextField
    value={emailAddress}
    inputRef={register}
    variant="standard"
    margin="normal"
    name="emailAddress"
    type="hidden"
    id="emailAddress"
    />
    {errors.short?.type === 'required' && <span>This field is required</span>}
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    >
    SAVE
    </Button>
    </form>
    )
  }
  
  export default SectorForm