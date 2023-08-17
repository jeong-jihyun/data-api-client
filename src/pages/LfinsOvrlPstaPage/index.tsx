import React, { useEffect, useState } from "react";
import { BoardType } from "../../type/BoardType";
import { useAppDispatch } from "../../hooks/useApp";
import { getLfinsOvrlPstaList } from "../../store/LfinsOvrlPstaReducer";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "../pagination.css";
import styled from "styled-components";

// const Th = styled.th< { width? : string} >`
//   text-align: center;
//   width:'${(prods)=> prods.width}';
//   font-size: 0.8rem;
// `
const Td = styled.td`
  font-size: 0.75rem;
`;
const LfinsOvrlPstaPage = () => {
  // Hooks
  const dispatch = useAppDispatch();
  // Redux States
  // States
  const [boardList, setBoardList] = useState<BoardType[]>([]);
  //  const [currentPost, setCurrentPost] = useState<BoardType[]>(boardList); // 페이지네이션을 통해 보여줄 게시글
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호
  const postPerPage: number = 10; // 페이지 당 게시글 개수

  /** Page Search */
  const searchList = async (page: number) => {
    const list = await dispatch(getLfinsOvrlPstaList(page));
    const totalCount: number = list.payload.totalCount;
    setTotalItemsCount(totalCount);
    setBoardList([...list.payload.item]);
  };
  /** Pagination ChangeEventHandler */
  const handlePageChange = (page: number) => {
    //searchList(page);
    setPage(page);
  };
  /** Page Initialize */
  useEffect(() => {
    searchList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  /** 현재 current Page */
  // useEffect(() => {
  //   setCurrentPost(currentPost.slice(indexOfFirstPost, indexOfLastPost));
  // }, [currentPost, page]);

  return (
    <div className="board-list">
      <Table responsive="sm">
        <tbody>
          {boardList.length > 0 &&
            boardList.map((board, index) => {
              return (
                <tr key={index}>
                  <Td>{board.num}</Td>
                  <Td>{board.astTsum}</Td>
                  <Td>{board.baseYm}</Td>
                  <Td>{board.bdbtPrvamtIstmRt}</Td>
                  <Td>{board.cnprfNprf}</Td>
                  <Td>{board.credMrktRiskRto}</Td>
                  <Td>{board.crpno}</Td>
                  <Td>{board.debtTsum}</Td>
                  <Td>{board.dvsnNm}</Td>
                  <Td>{board.iebalRto}</Td>
                  <Td>{board.incoPrmfee}</Td>
                  <Td>{board.inspnl}</Td>
                  <Td>{board.ivstPnl}</Td>
                  <Td>{board.lqdtRto}</Td>
                  <Td>{board.npfastRto}</Td>
                  <Td>{board.rbc}</Td>
                  <Td>{board.rskPrmfeeddthinsIbamtRto}</Td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default LfinsOvrlPstaPage;
