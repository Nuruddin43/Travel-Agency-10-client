import React from "react";

const Blogs = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center">
        Difference between authorization and authentication
      </h2>
      <p>
        To correctly manage the security of your companies data it is very
        important to understand the difference between authentication and
        authorization. Both the terms are often used in conjunction with each
        other in terms of security, especially when it comes to gaining access
        to the system. Both are very crucial topics often associated with the
        web as key pieces of its service infrastructure. However, both the terms
        are very different with totally different concepts. While it’s true that
        they are often used in the same context with the same tool, they are
        completely distinct from each other. Authentication means confirming
        your own identity, while authorization means granting access to the
        system. In simple terms, authentication is the process of verifying who
        you are, while authorization is the process of granting permission to
        cloudHQ to access your cloud accounts (copy files, restore emails, etc.)
        on your behalf.
      </p>
      <h2 className="mt-5 text-center">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p>
        Firebase Authentication makes it easier to get your users signed-in
        without having to understand the complexities behind implementing your
        own authentication system.
      </p>
      <p>
        Reviews some common authentication methods used to secure modern
        systems. First one, Password-based authentication, Passwords are the
        most common methods of authentication, Multi-factor authentication,
        Certificate-based authentication, Biometric authentication, Token-based
        authentication.
      </p>
      <h2 className="mt-5 text-center">
        What other services does firebase provide other than authentication
      </h2>
      <ul className="mx-auto">
        <li>Realtime data</li>
        <li>Ready-made api</li>
        <li>Built in security at the data node level</li>
        <li>File storage backed by Google Cloud Storage</li>
        <li>Static file hosting</li>
        <li>Treat data as streams to build highly scalable applications</li>
        <li>Limited query abilities due to Firebase’s data stream model</li>
        <li>
          Traditional relational data models are not applicable to NoSQL;
          therefore, your SQL chops will not transfer
        </li>
        <li>No on-premise installation</li>
      </ul>
    </div>
  );
};

export default Blogs;
