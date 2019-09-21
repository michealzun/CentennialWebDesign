using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Display
/// </summary>
public class Display
{
    public Display()
    {
    }

    public List<Club> DisplayClubs()
    {
        return (List<Club>)HttpContext.Current.Application["Clubs"];
    }
}