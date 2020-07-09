import React from "react";
import { useSelector } from "react-redux";
import { FS_COACH } from "../../constants/fireStoreColections";
import { useFirestoreConnect } from "react-redux-firebase";
import { Spinner } from "../../components";
import { MemberAndCoachCard } from "../../container";
import { Link } from "react-router-dom";
import { CREATE_NEW_COACHE } from "../../constants/routes";

const ClubCoachesList = () => {
  const coaches = useSelector((state) => state.firestore.ordered[FS_COACH]);
  useFirestoreConnect({ collection: FS_COACH });

  if (coaches) {
    return (
      <div className="coaches">
        <div className="coaches__link">
          <Link className="coaches__link--link" to={CREATE_NEW_COACHE}>
            <h3 className="coaches__link--header">
              Sukurti Naujo Trenėtio paskyrą
            </h3>
          </Link>
        </div>
        {coaches
          .filter((coach) => {
            return coach.firstName !== "";
          })
          .map((coach) => (
            <MemberAndCoachCard key={coach.id} coach {...coach} />
          ))}
      </div>
    );
  }

  return <Spinner />;
};

export default ClubCoachesList;
