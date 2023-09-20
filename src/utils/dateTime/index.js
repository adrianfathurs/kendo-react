import moment from 'moment';

export const convertDateTime = (props = null, format , substract = null, time = "day") => {
    if(props){
        return moment(props.dataItem[props.field]).format(format)
    }
    return moment().subtract(substract, time).format(format)
}
