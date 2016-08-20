***

Q. How Can I Tell When My Host Last Rebooted?

A. You can use this command 
```
zgrep BOOT_IMAGE /var/log/kern.log* 
```
to see when the host last booted, and then use that timestamp to look through the logs to check for any clues regarding issues that you may be troubleshooting. 

***

Q. What should I do if my instance froze and stopped responding? 

A. We recommend you check the console of the virtual machine and see if it's completely frozen, or if there's evidence of a kernel panic or another error. If you aren't doing so already, you can get the URL of the console via 
```
nova get-vnc-console UUID novnc
```
Note the time on the console, if any.
Capture a screenshot of the console if it's frozen and contains useful information. After you reboot, if you've enabled crash dumps on the virtual machine, you can check `/var/crash` for `vmcore` files and analyze the dump from there. Also check system activity (sar) stats around the time of the freeze.
Reboot the machine if you need it back up ASAP, or better yet, spin up a new one based on the same image. If you need further investigation done on the infrastructure, try to let us know the time of the freeze in UTC prior to rebooting it, and the UUID of the instance, and we'll see if there is anything to be found in the logs. 
