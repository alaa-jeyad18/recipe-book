import { FormGroup } from "@angular/forms";

// import { FormGroup } from "@angular/forms";

// export class CustomValidators{
//     static passwordMatching(group: FormGroup): {[s: string]: boolean} {
//         if(!group.get('password')  || !group.get('cpassword')){
//           return null
//         }
//           return (group.get('password').value === group.get('cpassword').value ? null : {'nomatch': true})
        
//       }
// }

export class CustomValidators{
    static passwordMatching(group: FormGroup): {[s: string]: boolean}{
        if(!group.get('password') || !group.get('cpassword')){
            return null
        }
        return (group.get('password').value === group.get('cpassword').value ? null : {'notmatch': false})
    }
}