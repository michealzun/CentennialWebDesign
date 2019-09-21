using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class InputField : System.Web.UI.UserControl
{
    string specialValidation;
    public string Label { set { LabelA.Text = value;} }
    public string TextBox { get { return TextBoxA.Text; } set { TextBoxA.Text = value; } }
    
    public string Error {  set { Validater.ErrorMessage = value; } }
    public string group { set { additionalValidator.ValidationGroup = value;Validater.ValidationGroup = value;  } }

    public string mode { set { specialValidation = value; } }

    protected void additionalValidate(object source, ServerValidateEventArgs args)
    {
        args.IsValid = false;
        switch (specialValidation)
        {
            case "birthday":
                DateTime birthOutput;
                if (DateTime.TryParse(args.Value, out birthOutput))
                {
                    args.IsValid = true;
                }
                else
                {
                    additionalValidator.ErrorMessage = "enter a valid date";
                }
                break;
            case "jersey":
                int jerseyOutput;
                if (Int32.TryParse(args.Value, out jerseyOutput))
                { 
                    if(jerseyOutput >= 0 && jerseyOutput < 100)
                    {
                        args.IsValid = true;
                    }
                    else
                    {
                        additionalValidator.ErrorMessage = "enter a number 0-99";
                    }
                }
                else
                {
                    additionalValidator.ErrorMessage = "enter a number 0-99";
                }
                break;
            case "reg":
                int regOutput;
                if (Int32.TryParse(args.Value, out regOutput))
                {
                    args.IsValid = true;
                }
                else
                {
                    additionalValidator.ErrorMessage = "enter a number";
                }
                break;
            default:
                args.IsValid = true;
                break;
         }
                
    }


    protected void aaaa(object source, ServerValidateEventArgs args)
    {
        args.IsValid = false;
        Validater.ErrorMessage = "no";
    }
}
