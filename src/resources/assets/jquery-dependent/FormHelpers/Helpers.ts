import $ from 'jquery';
import {submitForm} from "root/jquery-dependent/FormHelpers/Utils";


$(document).ready(function () {

     $(document).on('submit', '.js-ajax-form', function (e:any) {
         e.preventDefault();
         let form = <JQuery<any>>$(this);
         submitForm(form);
         return false;
     })
});