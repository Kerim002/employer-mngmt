import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* home nav bar */}
      <div className="h-16 w-full flex items-center justify-between">
        <div className="flex gap-3">
          <Button>Search</Button>
        </div>
        <div className="flex gap-5">
          <div className="">
            <p>Temur</p>
            <p className="text-sm text-gray-200">Rustamow</p>
          </div>
          <Button variant="destructive">Logout</Button>
        </div>
      </div>
      {/* Home table */}
      <div className="w-full h-full">
        <div className="grid grid-cols-5">
          {Array.from({ length: 10 }).map((_, index: number) => {
            return (
              <div key={index} className="card">
                {/* <HeightSpacer height={2} /> */}
                <Link
                  //   onClick={() => dispatch(setSelect(item))}
                  //   to={`/status/${item.id}`}
                  href="#"
                >
                  <div className="card-name">
                    <h2>Temur</h2>
                  </div>
                </Link>

                {/* <HeightSpacer height={0.5} /> */}
                <div className="card-info">
                  <p>Rustamow</p>
                  <p>20.10.2010</p>
                  <p>Erkek</p>
                  <p>Dashoguz</p>
                  <p>
                    {/* {item.clinicalDiagnos.slice(0, 25)} */}
                    test
                  </p>
                  <p>
                    {/* {item.section.slice(0, 25)} */}
                    test
                  </p>
                  <p>
                    {/* {item.testMaterial.slice(0, 25)} */}
                    test
                  </p>
                  <div className="info-btn">
                    {/* <i
                      className="bi bi-printer"
                      //   onClick={() => dispatch(openPrint(item.id))}
                    ></i>
                    <i
                      className="bi bi-trash"
                      onClick={() => {
                        // dispatch(openDelCard());
                        // dispatch(setDelete(item.id));
                      }}
                    ></i>

                    <i
                      className="bi bi-pencil"
                      onClick={() => {
                        // dispatch(setEditPac(item));
                        // dispatch(openAddPerson());
                      }}
                    ></i>
                    <i
                      onClick={() => {
                        // dispatch(setInfo(item));
                        // dispatch(openInfo());
                      }}
                      className="bi bi-info-circle"
                    ></i> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
