    // 1. Plantillas de cada departamento con los mismos placeholders
    //    (NAME, EMAIL, PHONE, POSITION, etc. según necesites).

const templates = {
    skillcloud: `
          <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
              <tr>
                  <td style="margin: 0.1px; padding: 0;">
                      <table cellpadding="0" style="border-collapse: collapse;">
                          <tr>
                              <td valign="top" style="margin: 0.1px; padding: 0 10px 0 0;"><img src="{{IMAGE}}" width="150" valign="top" alt="photo-logo" /></td>
                              <td valign="top" style="margin: 0.1px; padding: 0 0 0 10px; border-left: 3px solid #19355f;">
                                  <table cellpadding="0" style="border-collapse: collapse;">
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 18.1px/22.9px Verdana;"><span style="color: #2cabe2; font: bold 18px Verdana;">{{NAME}}</span>&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 12.1px/15.3px Verdana;"><span style="color: #19355f; font: italic bold 12px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 10px 0 0; font: 13.1px/16.5px Verdana;">
                                              <span style="color: #2cabe2; font: bold 13px Verdana;">E-mail:</span>&nbsp;
                                              <a style="text-decoration: none; color: #19355f; font: 13px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 13.1px/16.5px Verdana;">
                                              <span style="color: #2cabe2; font: bold 13px Verdana;">Website:</span>&nbsp;
                                              <a href="https://img.newoldstamp.com/r/646353/w?id=1" style="text-decoration: none; color: #19355f; font: 13px Verdana;" target="_blank">skillcloudstaffing.com</a>&nbsp;
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 10px 0 0; color: #2cabe2; font: bold 13px/16.5px Verdana;">Follow us:</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 5px 0 0;">
                                              <table cellpadding="0" style="border-collapse: collapse;">
                                                  <tr>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://img.newoldstamp.com/r/646353/facebook" target="_blank" valign="top">
                                                              <img src="https://img.newoldstamp.com/i/24/2/1/19355f/55.png?t=64" width="24" style="display: block; outline: 0;" valign="top" alt="facebook" />
                                                          </a>
                                                      </td>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://img.newoldstamp.com/r/646353/instagram" target="_blank" valign="top">
                                                              <img src="https://img.newoldstamp.com/i/24/2/1/19355f/98.png?t=0d" width="24" style="display: block; outline: 0;" valign="top" alt="instagram" />
                                                          </a>
                                                      </td>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://img.newoldstamp.com/r/646353/linkedin" target="_blank" valign="top">
                                                              <img src="https://img.newoldstamp.com/i/24/2/1/19355f/106.png?t=75" width="24" style="display: block; outline: 0;" valign="top" alt="linkedin" />
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                      <a href="https://img.newoldstamp.com/r/646353/b" target="_blank"><img src="https://img.newoldstamp.com/b/646353?t=27" width="438" style="outline: 0;" alt="banner" /></a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Verdana; color: #19355f;">
                      <div>
                          <span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
                              IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and delete
                              it from your system; you may not copy this message or disclose its contents to anyone.
                          </span>
                      </div>
                  </td>
              </tr>
          </table>

    `,
    management: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #212b5c; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/212b5c/icon105/email.png?t=91" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/637080/e?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/212b5c/icon105/website.png?t=e3" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/637080/w?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #212b5c;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637080/facebook" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/212b5c/55.png?t=c0" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637080/instagram" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/212b5c/98.png?t=4b" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637080/youtube" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/212b5c/224.png?t=76" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637080/linkedin" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/212b5c/106.png?t=52" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://img.newoldstamp.com/r/637080/b" target="_blank"><img src="https://img.newoldstamp.com/b/637080?t=42" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    executive: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #159ce8; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/159ce8/icon105/email.png?t=e2" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/159ce8/icon105/website.png?t=80" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/637057/w?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #159ce8;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637057/facebook" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/159ce8/55.png?t=c9" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637057/instagram" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/159ce8/98.png?t=a4" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637057/youtube" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/159ce8/224.png?t=4b" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/637057/linkedin" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/159ce8/106.png?t=6e" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://img.newoldstamp.com/r/637057/b" target="_blank"><img src="https://img.newoldstamp.com/b/637057?t=c1" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    marketing: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #ffce00; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/ffce00/icon105/email.png?t=7c" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/636990/e?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/ffce00/icon105/website.png?t=94" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/636990/w?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #ffce00;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636990/facebook" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/ffce00/55.png?t=64" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636990/instagram" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/ffce00/98.png?t=62" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636990/youtube" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/ffce00/224.png?t=3a" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636990/linkedin" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/ffce00/106.png?t=ff" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://img.newoldstamp.com/r/636990/b" target="_blank"><img src="https://img.newoldstamp.com/b/636990?t=4f" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    isa: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #81ce24; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/81ce24/icon105/email.png?t=33" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/636997/e?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/81ce24/icon105/website.png?t=0c" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://img.newoldstamp.com/r/636997/w?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #81ce24;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636997/facebook" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/81ce24/55.png?t=99" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636997/instagram" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/81ce24/98.png?t=c4" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636997/youtube" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/81ce24/224.png?t=6f" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://img.newoldstamp.com/r/636997/linkedin" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/81ce24/106.png?t=4e" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://img.newoldstamp.com/r/636997/b" target="_blank"><img src="https://img.newoldstamp.com/b/636997?t=51" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    it: `
      <!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
  </head>
  <body>
      <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
          <tr>
              <td style="margin: 0.1px; padding: 0;">
                  <table cellpadding="0" style="border-collapse: collapse;">
                      <tr>
                          <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                          <td style="margin: 0.1px; padding: 0;">
                              <table cellpadding="0" style="border-collapse: collapse;">
                                  <tr>
                                      <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #e82300; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/e82300/icon105/email.png?t=e7" alt="" style="display: block;" width="14" /></td>
                                                  <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                      <a style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="https://img.newoldstamp.com/i/ib/e82300/icon105/website.png?t=4d" alt="" style="display: block;" width="14" /></td>
                                                  <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                      <a href="https://img.newoldstamp.com/r/669745/w?id=1" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #e82300;"></td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 5px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://img.newoldstamp.com/r/669745/facebook" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/e82300/55.png?t=8d" width="20" valign="top" alt="facebook" /></a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://img.newoldstamp.com/r/669745/instagram" target="_blank">
                                                          <img src="https://img.newoldstamp.com/i/20/1/1/e82300/98.png?t=59" width="20" valign="top" alt="instagram" />
                                                      </a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://img.newoldstamp.com/r/669745/youtube" target="_blank"><img src="https://img.newoldstamp.com/i/20/1/1/e82300/224.png?t=da" width="20" valign="top" alt="youtube" /></a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://img.newoldstamp.com/r/669745/linkedin" target="_blank">
                                                          <img src="https://img.newoldstamp.com/i/20/1/1/e82300/106.png?t=33" width="20" valign="top" alt="linkedin" />
                                                      </a>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                  <a href="https://img.newoldstamp.com/r/669745/b" target="_blank"><img src="https://img.newoldstamp.com/b/669745?t=6c" width="350" style="outline: 0;" alt="banner" /></a>
              </td>
          </tr>
          <tr>
              <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                  <div>
                      IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                      delete it from your system; you may not copy this message or disclose its contents to anyone.
                  </div>
              </td>
          </tr>
      </table>
  </body>
</html>

    `
  };

  export default templates;