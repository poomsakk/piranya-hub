import React, { useState } from 'react';
import { Switch} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [typeFields, setTypeFields] = useState([
    { id: uuidv4(), 
      typeName: "", 
      size: "",
      pricePerMonth: "",
      pricePerDay: "",
      available: true
    },
      
  ]);

  const handleChangeInput = (id, event) => {
    const newInputFields = typeFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setTypeFields(newInputFields);
  }

  const handleChangeAvailable = (id, event) => {
    const newAvailableFields = typeFields.map(i => {
      if(id === i.id) {
        i[event.target.checked] = !event.target.checked
      }
      return i;
    })
    
    setTypeFields(newAvailableFields);
  }

  const handleAddFields = () => {
    setTypeFields([...typeFields, { id: uuidv4(),  typeName: "", size: "", pricePerMonth: "", pricePerDay: "", available: true}])
  }

  const handleRemoveFields = id => {
    const values  = [...typeFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setTypeFields(values);
  }

  console.log(typeFields)

  return (
    <div>
      <div className="flex flex-row" >
        <h1 className="font-IBMPlexSansThai text-2xl text-[#162B78] ml-12 m-2 w-96" >3. ประเภทห้องพัก</h1>
        <button
            type="button"
            onClick={handleAddFields}
            class="ml-[320px] group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
            >
            <span class="rounded-xl absolute outline-0 inset-0 border focus:outline-none outline-none border-[#162B78] group-active:border-[#162B78]"></span>
            <span class="rounded-xl font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-[#162B78] text-white bg-[#162B78] px-4 py-3 transition-transform active:border-[#162B78]  active:bg-black group-hover:-translate-x-1 group-hover:-translate-y-1">
              เพิ่มประเภท
            </span>
          </button>
      </div>
      <div>
        { typeFields.map(inputField => (
          <div 
            className="border-2 border-[#162B78] rounded-3xl ml-12 mr-12 mt-5 mb-5"
            key={inputField.id}>
              <div className="ml-6 mb-6">
                <div class="flex flex-row ">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >รูปแบบห้อง</h1>
                  <input
                    type={"text"}
                    className="
                        font-IBMPlexSansThai 
                        bg-[#EFEFEF]
                        placeholder:text-zinc-500
                        text-lg
                        pl-5 
                        w-[180px]
                        h-[40px]
                        mt-5
                        ml-8
                        border-2 
                        border-[#162B78] 
                        focus:outline-none
                        focus:border-[#162B78]
                        rounded-xl
                        "
                    placeholder="ระบุประเภท"
                    name="typeName"
                    value={inputField.typeName}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  />
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
                <div class="flex flex-row">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-6" >ขนาดห้อง</h1>
                  <input
                    type={"text"}
                    className="
                              font-IBMPlexSansThai 
                              bg-[#EFEFEF]
                              placeholder:text-zinc-500
                              text-lg
                              pl-5 
                              w-[180px]
                              h-[40px]
                              mt-5
                              ml-8
                              border-2 
                              border-[#162B78] 
                              focus:outline-none
                              focus:border-[#162B78]
                              rounded-xl
                              "
                    placeholder="ระบุขนาดห้อง"
                    name="size"
                    value={inputField.size}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  />
                  <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-44 mt-7" >ตารางเมตร</h1>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
                <div class="flex flex-row">
                <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >เช่ารายเดือน</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
                  <input
                    type={"text"}
                    className="
                                font-IBMPlexSansThai 
                                bg-[#EFEFEF]
                                placeholder:text-zinc-500
                                text-lg
                                pl-5 
                                w-[180px]
                                h-[40px]
                                mt-5
                                ml-[-15px]
                                border-2 
                                border-[#162B78] 
                                focus:outline-none
                                focus:border-[#162B78]
                                rounded-xl
                                "
                    placeholder="ระบุค่าเช่ารายเดือน"
                    name="pricePerMonth"
                    value={inputField.pricePerMonth}
                    onChange={event => handleChangeInput(inputField.id, event)}

                  />
                  <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/เดือน</h1>
                  <FormControl class="flex flex-row">
                    <FormControlLabel
                      className='mt-5'
                      value="NoMonth"
                      control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                    <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายเดือน</h1>
                  </FormControl>
                </RadioGroup>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
                <div class="flex flex-row ">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-36 mt-7" >เช่ารายวัน</h1>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} className='mt-5 ' />} />
                    <input
                      type={"text"}
                      className="
                                  font-IBMPlexSansThai 
                                  bg-[#EFEFEF]
                                  placeholder:text-zinc-500
                                  text-lg
                                  pl-5 
                                  w-[180px]
                                  h-[40px]
                                  mt-5
                                  ml-[-15px]
                                  border-2 
                                  border-[#162B78] 
                                  focus:outline-none
                                  focus:border-[#162B78]
                                  rounded-xl
                                  "
                      placeholder="ระบุค่าเช่ารายวัน"
                      name="pricePerDay"
                      value={inputField.pricePerDay}
                      onChange={event => handleChangeInput(inputField.id, event)}
                    />
                    <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] m-2 w-32 mt-7" >บาท/วัน</h1>
                    <FormControl class="flex flex-row">
                      <FormControlLabel
                        className='mt-5  font-IBMPlexSansThai text-xl text-[#162B78]'
                        value="NoDay"
                        control={<Radio sx={{ '&, &.Mui-checked': { color: '#162B78', } }} />} />
                      <h1 className="font-IBMPlexSansThai text-lg text-[#162B78] w-44 mt-7 ml-[-15px]" >ไม่มีห้องเช่ารายวัน</h1>
                    </FormControl>
                  </RadioGroup>
                </div>
                <div class="flex flex-row">
                  <h1 className="font-IBMPlexSansThai text-xl text-[#162B78] ml-3 m-2 w-32 mt-7" >ห้องว่าง</h1>
                  <Switch
                    className="mt-6"
                    checked={typeFields.available}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={handleChangeAvailable}
                  />
                  {typeFields.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFields(inputField.id)}
                    class="
                    ml-[550px]
                    mb-[-50px]
                    font-IBMPlexSansThai
                    text-lg 
                    text-[#162B78] 
                    underline 
                    hover:text-red-500
                    m-2"
                    >
                    ลบ
                  </button>
                )}
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
              </div>
          </div>
        )) }

      </div>
    </div>
  );
}

export default App;