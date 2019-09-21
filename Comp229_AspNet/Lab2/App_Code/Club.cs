using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Club
/// </summary>
public class Club
{
    public Club()
    {
    }
    private int primaryKey;
    public int PrimaryKey
    {
        get; set;
    }
    private string name;
    public string Name
    {
        get; set;
    }
    private string city;
    public string City
    {
        get; set;
    }
    private int registrationNumber;
    public int RegistrationNumber
    {
        get; set;
    }
    private string address;
    public string Address
    {
        get; set;
    }
}