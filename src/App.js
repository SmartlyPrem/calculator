import React, {useState } from "react";

const App = () => {
    const [calValue, setCalValue] = useState('');
    const [multi, setMulti] = useState('');
    const [devide, setDevide] = useState('');
    const [minus, setMinus] = useState('');
    const [moduls, setModuls] = useState('');
    const [adding, setAdds] = useState('');
    const [store, setStore] = useState('');
    const [backk, setBack] = useState(false)
    const [subm, setSubm] = useState(false)

    const getValue = (event) =>{
        const data = event.target.value;
        const combineValue = calValue + data;
        setCalValue(combineValue);
        setBack(false);
        // setCalValue(calValue.concat(event.target.value))

        if(event.target.value == '*'){
            setMulti(calValue);
            setStore(calValue + " x ")
            setCalValue('');
            setSubm(false)
        }
        if(event.target.value == '/'){
            setDevide(calValue);
            setStore(calValue + " / ");
            setCalValue('');
            setSubm(false)
        }
        if(event.target.value == '-'){
            setMinus(calValue);
            setStore(calValue + " - ");
            setCalValue('');
            setSubm(false)
        }
        if(event.target.value == '%'){
            setModuls(calValue);
            setStore(calValue + " % ");
            setCalValue('');
            setSubm(false)
        }
        if(event.target.value == '+'){
            setAdds(calValue);
            setStore(calValue + " + ");
            setCalValue('');
            setSubm(false)
        }

        if (event.target.value == '=' && multi != "") {
            setCalValue(multi * calValue);
            setStore(store + calValue);
            setBack(true);
            setSubm(true)
        }
        if (event.target.value == '=' && devide != "") {
            setCalValue(devide / calValue);
            setStore(store + calValue)
            setBack(true)
            setSubm(true)
        }
        if (event.target.value == '=' && minus != "") {
            setCalValue(minus - calValue);
            setStore(store + calValue);
            setBack(true);
            setSubm(true)
        }
        if (event.target.value == '=' && moduls != "") {
            setCalValue(moduls % calValue);
            setStore(store + calValue);
            setBack(true);
            setSubm(true)
        }
        if (event.target.value == '=' && adding != "") {
            setCalValue(parseInt(adding) + parseInt(calValue));
            setStore(store + calValue);
            setBack(true);
            setSubm(true)
        }
    }

    const removeAll = () =>{
        setCalValue('');
        setMulti('');
        setDevide('');
        setMinus('');
        setModuls('');
        setAdds('');
        setStore('')
    }

    const backfunction = () =>{
        setCalValue(calValue.slice(0, -1))
    }

    // const calculate =() => {
    //     setCalValue(eval(calValue).toString())
    // }
    return (
        <>
            <div className="w-[400px] m-auto h-fit mt-[50px] rounded shadow p-3 border bg-slate-300 box-border">
                <input readOnly className="w-full outline-none border h-[80px] p-3 mb-2 text-4xl text-right" value={calValue} type="text" />
                <input readOnly className="w-[30%] outline-none border h-[30px] p-3 mb-2 text-lg text-right" value={store} type="text" />
                <div className="w-fit h-fit flex flex-wrap justify-center gap-2 my-2">
                    <input readOnly onClick={removeAll} value='AC' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-sky-200 text-sky-950 font-semibold text-center"/>
                    <input readOnly onClick={backfunction} disabled={backk == true ? true : ''} value='Back' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-sky-200 text-sky-950 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='%' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='/' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 text-sky-950 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='7' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='8' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='9' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='*' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 text-sky-950 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='4' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='5' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='6' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='-' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 text-sky-950 text-3xl font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='1' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='2' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='3' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='+' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 text-sky-950 text-xl font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='0' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-center"/>
                    <input readOnly onClick={getValue} value='.' type="text" className="w-20 h-[60px] border rounded-2xl cursor-pointer bg-slate-200 font-semibold text-xl text-center"/>
                    <input readOnly onClick={getValue} value='=' disabled={subm == true ? true : false} type="text" className="w-40 h-[60px] border rounded-2xl cursor-pointer bg-blue-700 text-white text-xl font-semibold text-center"/>
                </div>
            </div>
        </>
    )
}

export default App;